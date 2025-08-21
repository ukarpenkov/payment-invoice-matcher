import React, { useState } from "react";
import "./Filter.css";

const Filter = ({
  fields = [],
  operators = [
    { value: "equals", label: "равно" },
    { value: "notEquals", label: "не равно" },
    { value: "contains", label: "содержит" },
    { value: "greaterThan", label: "больше" },
    { value: "lessThan", label: "меньше" },
  ],
  onApplyFilter,
  onClearAll,
  initialConditions = [],
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [conditions, setConditions] = useState(initialConditions);
  const [logicOperator, setLogicOperator] = useState("and");

  const addCondition = () => {
    setConditions((prev) => [
      ...prev,
      {
        field: fields[0]?.value || "",
        operator: operators[0]?.value || "",
        value: "",
      },
    ]);
  };

  const updateCondition = (index, field, value) => {
    setConditions((prev) =>
      prev.map((condition, i) =>
        i === index ? { ...condition, [field]: value } : condition
      )
    );
  };

  const removeCondition = (index) => {
    setConditions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApply = () => {
    onApplyFilter?.(conditions, logicOperator);
    setIsOpen(false);
  };

  const handleClearAll = () => {
    setConditions([]);
    onClearAll?.();
  };

  const getFieldValues = (fieldKey) => {
    const field = fields.find((f) => f.value === fieldKey);
    return field?.options || [];
  };

  return (
    <div className="FilterWrap">
      <div data-test="condition-filter">
        <div className="Breadcrumbs">
          <button
            className="IconButton Filter"
            type="button"
            data-test="condition-filter-button-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.0929 2.57912C1.25675 2.22596 1.61069 2 2.00001 2H22C22.3893 2 22.7433 2.22596 22.9071 2.57912C23.071 2.93229 23.015 3.34845 22.7636 3.64573L15 12.8261V21C15 21.3466 14.8206 21.6684 14.5257 21.8507C14.2309 22.0329 13.8628 22.0494 13.5528 21.8944L9.5528 19.8944C9.21402 19.725 9.00001 19.3788 9.00001 19V12.8261L1.23644 3.64573C0.985046 3.34845 0.929037 2.93229 1.0929 2.57912ZM4.15532 4L10.7636 11.8143C10.9162 11.9948 11 12.2236 11 12.46V18.382L13 19.382V12.46C13 12.2236 13.0838 11.9948 13.2364 11.8143L19.8447 4H4.15532Z"
                  fill="#2E3238"
                />
              </svg>
            </span>
          </button>

          <ul className="BreadcrumbsList">
            <li draggable="true">
              <div
                className="BreadcrumbsLink"
                data-test="condition-filter-all-breadcrumb"
              >
                Все записи
              </div>
            </li>

            {conditions.map((condition, index) => (
              <React.Fragment key={index}>
                <li>
                  <div className="BreadcrumbsChevron">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
                        fill="#2E3238"
                      />
                    </svg>
                  </div>
                </li>
                <li draggable="true">
                  <div
                    className="BreadcrumbsLink"
                    data-test="condition-filter-filtering-breadcrumb"
                  >
                    <span title={getConditionTitle(condition)}>
                      {getConditionTitle(condition)}
                    </span>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div className={`FilterWrapContent ${isOpen ? "active" : ""}`}>
            <div className="Filter">
              <div className="FilterControls">
                <div className="FilterControlsContainer">
                  <div className="Column">
                    <div className="FilterMainLabel">Новый критерий</div>
                    <button
                      className={`DefaultButton Button ${
                        logicOperator === "and" ? "active" : ""
                      }`}
                      type="button"
                      data-test="condition-button-and"
                      onClick={() => setLogicOperator("and")}
                    >
                      И
                    </button>
                    <button
                      className={`DefaultButton Button ${
                        logicOperator === "or" ? "active" : ""
                      }`}
                      type="button"
                      data-test="condition-button-or"
                      onClick={() => setLogicOperator("or")}
                    >
                      ИЛИ
                    </button>
                  </div>
                  <button
                    className="DefaultButton ClearAll"
                    type="button"
                    data-test="condition-button-clear-all"
                    onClick={handleClearAll}
                  >
                    Очистить все
                  </button>
                </div>
              </div>

              <div
                className="FilterConditions"
                data-test="condition-filtering-rows"
              >
                {conditions.map((condition, index) => (
                  <ConditionRow
                    key={index}
                    condition={condition}
                    fields={fields}
                    operators={operators}
                    onUpdate={(field, value) =>
                      updateCondition(index, field, value)
                    }
                    onRemove={() => removeCondition(index)}
                    onAddLogic={(op) => {
                      setConditions((prev) => [
                        ...prev.slice(0, index + 1),
                        {
                          field: fields[0]?.value || "",
                          operator: operators[0]?.value || "",
                          value: "",
                        },
                        ...prev.slice(index + 1),
                      ]);
                      setLogicOperator(op);
                    }}
                  />
                ))}

                {conditions.length === 0 && (
                  <div className="EmptyState">
                    <p>Нет условий фильтрации</p>
                    <button className="DefaultButton" onClick={addCondition}>
                      Добавить условие
                    </button>
                  </div>
                )}
              </div>

              <div className="Buttons">
                <button
                  className="PrimaryButton Button"
                  type="button"
                  data-test="condition-button-run"
                  onClick={handleApply}
                  disabled={conditions.length === 0}
                >
                  Применить
                </button>
                <button
                  className="DefaultButton Button"
                  type="button"
                  data-test="condition-button-close"
                  onClick={() => setIsOpen(false)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ConditionRow = ({
  condition,
  fields,
  operators,
  onUpdate,
  onRemove,
  onAddLogic,
}) => {
  const fieldOptions = fields.map((field) => ({
    value: field.value,
    label: field.label,
  }));

  const operatorOptions = operators.map((op) => ({
    value: op.value,
    label: op.label,
  }));

  const valueOptions = getFieldValues(condition.field);

  return (
    <div className="Row">
      <div className="Fields">
        <div className="Field">
          <div className="ConditionField" data-test="condition-row-field">
            <CustomSelect
              options={fieldOptions}
              value={condition.field}
              onChange={(value) => onUpdate("field", value)}
              placeholder="Выберите поле"
            />
          </div>
        </div>

        <div className="Field">
          <CustomSelect
            options={operatorOptions}
            value={condition.operator}
            onChange={(value) => onUpdate("operator", value)}
            placeholder="Выберите оператор"
          />
        </div>

        <div className="Field" data-test="condition-field-value">
          <CustomSelect
            options={valueOptions}
            value={condition.value}
            onChange={(value) => onUpdate("value", value)}
            placeholder="Выберите значение"
            isSearchable={valueOptions.length > 10}
          />
        </div>
      </div>
    </div>
  );
};

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  isSearchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = isSearchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="CustomSelectContainer">
      <button
        type="button"
        className="CustomSelectInput"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="InputText">
          {selectedOption?.label || placeholder}
        </span>
        <span className="InputChevron">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
              fill="#2E3238"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="CustomSelectDropdown">
          {isSearchable && (
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="SearchInput"
            />
          )}
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={`SelectOption ${
                option.value === value ? "selected" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
                setSearchTerm("");
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getConditionTitle = (condition) => {
  const field = condition.field;
  const operator = condition.operator;
  const value = condition.value;

  return `${field} ${operator} ${value}`;
};

const getFieldValues = (fieldKey) => {
  return [
    { value: "cash", label: "наличный" },
    { value: "study", label: "обучение" },
  ];
};

export default Filter;
