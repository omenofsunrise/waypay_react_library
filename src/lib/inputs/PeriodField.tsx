import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import styled from 'styled-components';
import CustomCalendar from './CustomCalendar';
import BaseModal, { ModalHeader, ModalTitle } from '../modal/BaseModal';
import type { PredefinedPeriod } from '../types/analytic';

interface PeriodOption {
  id: string;
  label: string;
  value: PredefinedPeriod;
}

interface PeriodFieldProps {
  value?: string;
  placeholder?: string;
  options?: PeriodOption[];
  showCustomPeriodButton?: boolean;
  onChange?: (value: string, startDate?: string, endDate?: string) => void;
  onCustomPeriodClick?: () => void;
}

const defaultOptions: PeriodOption[] = [
  { id: 'Last7Days', label: 'За последние 7 дней', value: 'Last7Days' },
  { id: 'ThisMonth', label: 'За этот месяц', value: 'ThisMonth' },
  { id: 'Last31Days', label: 'За последние 31 день', value: 'Last31Days' },
  { id: 'PreviousMonth', label: 'За прошлый месяц', value: 'PreviousMonth' },
  { id: 'ThisYear', label: 'За этот год', value: 'ThisYear' },
  { id: 'PreviousYear', label: 'За прошлый год', value: 'PreviousYear' },
];

const PeriodField: React.FC<PeriodFieldProps> = ({
  value = '',
  placeholder = 'Выберите период',
  options = defaultOptions,
  showCustomPeriodButton = true,
  onChange,
  onCustomPeriodClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value === 'Custom' && startDate && endDate) {
      const formattedStart = formatDateForDisplay(startDate);
      const formattedEnd = formatDateForDisplay(endDate);
      setSelectedLabel(`С ${formattedStart} по ${formattedEnd}`);
    } else {
      const selectedOption = options.find((opt) => opt.value === value);
      setSelectedLabel(selectedOption ? selectedOption.label : '');
    }
  }, [value, options, startDate, endDate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }

      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        const calendarElements = [...document.querySelectorAll('.calendar-container, .arrow-button')];

        const clickedInsideCalendar = calendarElements.some((el) => el.contains(event.target as Node));

        if (!clickedInsideCalendar) {
          setIsModalOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const handleSelect = (option: PeriodOption) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleCustomPeriodClick = () => {
    setIsOpen(false);
    if (onCustomPeriodClick) {
      onCustomPeriodClick();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleClearPeriod = () => {
    onChange?.('');
    setSelectedLabel('');
    setStartDate('');
    setEndDate('');
  };

  const handleSavePeriod = () => {
    if (startDate && endDate) {
      const formattedStart = formatDateForDisplay(startDate);
      const formattedEnd = formatDateForDisplay(endDate);
      const customLabel = `С ${formattedStart} по ${formattedEnd}`;

      onChange?.('Custom', startDate, endDate);
      setSelectedLabel(customLabel);
      setIsModalOpen(false);
    }
  };

  const formatDateForDisplay = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const ModalHeaderContent = () => (
    <ModalHeaderWithClear>
      <ModalHeader style={{ margin: 0 }}>
        <ModalTitle style={{ margin: 0 }}>Выбор периода</ModalTitle>
      </ModalHeader>
      <ClearPeriodButton onClick={handleClearPeriod}>Очистить период</ClearPeriodButton>
    </ModalHeaderWithClear>
  );

  return (
    <>
      <Container ref={dropdownRef}>
        <InputField onClick={() => setIsOpen(!isOpen)}>
          <InputText>{selectedLabel || placeholder}</InputText>
          <ArrowIcon $isOpen={isOpen}>▼</ArrowIcon>
        </InputField>

        {isOpen && (
          <Dropdown>
            {options.map((option) => (
              <OptionItem key={option.id} onClick={() => handleSelect(option)} $isSelected={value === option.value}>
                <RadioButton $isSelected={value === option.value}>{value === option.value && <RadioButtonInner />}</RadioButton>
                <OptionLabel>{option.label}</OptionLabel>
              </OptionItem>
            ))}
            {showCustomPeriodButton && <CustomPeriodButton onClick={handleCustomPeriodClick}>Другой период</CustomPeriodButton>}
          </Dropdown>
        )}
      </Container>

      {isModalOpen && (
        <div ref={modalRef}>
          <BaseModal
            title=""
            onClose={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            onSave={(event) => {
              event.preventDefault();
              handleSavePeriod();
            }}
            saveButtonText="Выбрать"
            customLayout={<ModalHeaderContent />}
          >
            <CalendarContainer>
              <CalendarColumn>
                <CustomCalendar value={startDate} onChange={(date) => setStartDate(date)} />
              </CalendarColumn>
              <CalendarColumn>
                <CustomCalendar value={endDate} onChange={(date) => setEndDate(date)} />
              </CalendarColumn>
            </CalendarContainer>
          </BaseModal>
        </div>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 245px;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  width: 100%;
  height: 20px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #adb3bc;
  }

  &:focus {
    outline: none;
    border-color: #007d88;
  }
`;

const InputText = styled.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  color: #adb3bc;
  margin-left: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 100;
  max-height: 350px;
  overflow-y: auto;
`;

const OptionItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  background: ${({ $isSelected }) => ($isSelected ? 'rgba(232, 216, 216, 1)' : 'transparent')};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const RadioButton = styled.div<{ $isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#007d88' : '#adb3bc')};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const RadioButtonInner = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`;

const OptionLabel = styled.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;

const CustomPeriodButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px 0 0;
  min-height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007d88;
  cursor: pointer;
  text-align: center;
  width: auto;

  &:hover {
    background: #f5f5f5;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`;

const CalendarColumn = styled.div`
  flex: 1;
`;

const ModalHeaderWithClear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`;

const ClearPeriodButton = styled.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 4px;
  margin-right: 40px;

  &:hover {
    text-decoration: underline;
  }
`;

export default PeriodField;
