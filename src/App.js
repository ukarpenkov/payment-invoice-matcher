import logo from "./logo.svg";
import "./App.css";
import GroupedTable from "./components/GroupedTable";
import Filter from "./components/Filter";
import ApplyBtn from "./components/ApplyBtn";

const App = () => {
  const fields = [
    {
      value: "type",
      label: "Тип",
      options: [
        { value: "elecrton", label: "электронный" },
        { value: "cash", label: "наличный" },
      ],
    },
  ];

  const columns1 = [
    {
      key: "number",
      title: "Номер",
      filterable: true,
    },
    {
      key: "date",
      title: "Дата создания",
      filterable: true,
    },
    {
      key: "type",
      title: "Тип",
      filterable: true,
    },
    {
      key: "summ",
      title: "Сумма",
      filterable: true,
    },
    {
      key: "customer",
      title: "Заказчик",
      filterable: true,
    },
    {
      key: "customer.inn",
      title: "Заказчик.ИНН",
      filterable: true,
    },
    {
      key: "contractor",
      title: "Исполнитель",
      filterable: true,
    },
    {
      key: "contractor.inn",
      title: "Исполнитель.ИНН",
      filterable: true,
    },
    {
      key: "payComment",
      title: "Комментарий платежа",
      filterable: true,
    },
    {
      key: "buhComment",
      title: "Комментарий бухгалтера",
      filterable: true,
    },
  ];
  const columns2 = [
    {
      key: "number",
      title: "Номер",
      filterable: true,
    },
    {
      key: "type",
      title: "Тип",
      filterable: true,
    },
    {
      key: "person",
      title: "ФИО экзаменуемого",
      filterable: true,
    },
    {
      key: "qualification",
      title: "Квалификация",
      filterable: true,
    },
    {
      key: "summ",
      title: "Сумма",
      filterable: true,
    },
    {
      key: "customer",
      title: "Заказчик",
      filterable: true,
    },
    {
      key: "customer.inn",
      title: "Заказчик.ИНН",
      filterable: true,
    },
    {
      key: "contractor",
      title: "Исполнитель",
      filterable: true,
    },
    {
      key: "contractor.inn",
      title: "Исполнитель.ИНН",
      filterable: true,
    },
    {
      key: "payComment",
      title: "Назначение платежа",
      filterable: true,
    },
  ];

  const data1 = [
    {
      number: "INV001",
      date: "2024-01-15",
      type: "Счет",
      summ: 150000,
      customer: "ООО 'Ромашка'",
      "customer.inn": "7701234567",
      contractor: "ИП Иванов А.С.",
      "contractor.inn": "7719876543",
      payComment: "Оплата за услуги консультации",
      buhComment: "Проведен, НДС включен",
    },
    {
      number: "INV002",
      date: "2024-01-18",
      type: "Акт выполненных работ",
      summ: 275000,
      customer: "АО 'Технопром'",
      "customer.inn": "7723456789",
      contractor: "ООО 'Стройсервис'",
      "contractor.inn": "7734567890",
      payComment: "Оплата строительных работ",
      buhComment: "Ожидание подтверждения",
    },
    {
      number: "INV003",
      date: "2024-01-20",
      type: "Счет-фактура",
      summ: 89000,
      customer: "ИП Петров В.К.",
      "customer.inn": "7745678901",
      contractor: "ООО 'Логистик'",
      "contractor.inn": "7756789012",
      payComment: "Транспортные услуги",
      buhComment: "НДС 20%",
    },
  ];
  const data2 = [
    {
      number: "ACC001",
      type: "Аттестация",
      person: "Иванов Иван Иванович",
      qualification: "Сварщик 4 разряда",
      summ: 5000,
      customer: "ООО 'Нефтегазстрой'",
      "customer.inn": "7701123456",
      contractor: "ЦОПК 'Профессионал'",
      "contractor.inn": "7711987654",
      payComment: "Оплата проведения аттестации сварщика",
    },
    {
      number: "ACC002",
      type: "Экзамен",
      person: "Петрова Анна Сергеевна",
      qualification: "Бухгалтер 1 категории",
      summ: 3500,
      customer: "АО 'Финанс-Групп'",
      "customer.inn": "7722345678",
      contractor: "УЦ 'Бухучет'",
      "contractor.inn": "7722876543",
      payComment: "Профессиональный экзамен для бухгалтера",
    },
    {
      number: "ACC003",
      type: "Аттестация",
      person: "Сидоров Михаил Петрович",
      qualification: "Электромонтер 5 разряда",
      summ: 4500,
      customer: "ООО 'Энергосеть'",
      "customer.inn": "7733456789",
      contractor: "УЦ 'Энергетик'",
      "contractor.inn": "7733765432",
      payComment: "Аттестация по электробезопасности",
    },
  ];

  return (
    <>
      <div className="main-content">
        <div className="table-with-filter">
          <h2 style={{ marginLeft: "20px" }}>Данные платежей</h2>
          <Filter
            fields={fields}
            initialConditions={[
              {
                field: "Номер",
                operator: "notEquals",
                value: "closed",
              },
            ]}
          />
          <GroupedTable columns={columns1} data={data1} />
        </div>
        <div className="table-with-filter">
          <h2 style={{ marginLeft: "20px" }}>Данные счетов</h2>
          <Filter
            fields={fields}
            initialConditions={[
              {
                field: "status",
                operator: "notEquals",
                value: "closed",
              },
            ]}
          />
          <GroupedTable columns={columns2} data={data2} />
        </div>
      </div>

      <ApplyBtn />
    </>
  );
};

export default App;
