import logo from "./logo.svg";
import "./App.css";
import GroupedTable from "./components/GroupedTable";
import Filter from "./components/Filter";

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
    {
      number: "INV004",
      date: "2024-01-22",
      type: "Счет",
      summ: 420000,
      customer: "ООО 'Мебельград'",
      "customer.inn": "7767890123",
      contractor: "ИП Сидоров М.П.",
      "contractor.inn": "7778901234",
      payComment: "Закупка материалов",
      buhComment: "Авансовый платеж",
    },
    {
      number: "INV005",
      date: "2024-01-25",
      type: "Акт выполненных работ",
      summ: 185000,
      customer: "ЗАО 'Электросила'",
      "customer.inn": "7789012345",
      contractor: "ООО 'ИТ-Решения'",
      "contractor.inn": "7790123456",
      payComment: "Разработка ПО",
      buhComment: "Оплачено полностью",
    },
    {
      number: "INV006",
      date: "2024-01-28",
      type: "Счет-фактура",
      summ: 63000,
      customer: "ООО 'Торгсервис'",
      "customer.inn": "7801234567",
      contractor: "ИП Кузнецова Е.В.",
      "contractor.inn": "7812345678",
      payComment: "Маркетинговые услуги",
      buhComment: "Без НДС",
    },
    {
      number: "INV007",
      date: "2024-01-30",
      type: "Счет",
      summ: 320000,
      customer: "АО 'Нефтегаз'",
      "customer.inn": "7823456789",
      contractor: "ООО 'Бурсервис'",
      "contractor.inn": "7834567890",
      payComment: "Оборудование для бурения",
      buhComment: "Требуется акт сверки",
    },
    {
      number: "INV008",
      date: "2024-02-02",
      type: "Акт выполненных работ",
      summ: 95000,
      customer: "ИП Волков Д.С.",
      "customer.inn": "7845678901",
      contractor: "ООО 'Дизайн-студия'",
      "contractor.inn": "7856789012",
      payComment: "Дизайн интерьера",
      buhComment: "Предоплата 50%",
    },
    {
      number: "INV009",
      date: "2024-02-05",
      type: "Счет-фактура",
      summ: 210000,
      customer: "ООО 'Стройинвест'",
      "customer.inn": "7867890123",
      contractor: "ИП Николаев П.К.",
      "contractor.inn": "7878901234",
      payComment: "Ремонтные работы",
      buhComment: "НДС в составе",
    },
    {
      number: "INV010",
      date: "2024-02-08",
      type: "Счет",
      summ: 175000,
      customer: "ЗАО 'Фармамед'",
      "customer.inn": "7889012345",
      contractor: "ООО 'Медтехника'",
      "contractor.inn": "7890123456",
      payComment: "Медицинское оборудование",
      buhComment: "Ожидание отгрузки",
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
    {
      number: "ACC004",
      type: "Квалификация",
      person: "Кузнецова Елена Викторовна",
      qualification: "Повар 4 разряда",
      summ: 4000,
      customer: "ИП 'Ресторан Вкусно'",
      "customer.inn": "7744567890",
      contractor: "ЦОПК 'Кулинар'",
      "contractor.inn": "7744654321",
      payComment: "Присвоение квалификации повара",
    },
    {
      number: "ACC005",
      type: "Аттестация",
      person: "Волков Денис Станиславович",
      qualification: "Стропальщик 3 разряда",
      summ: 3800,
      customer: "ООО 'Стройтехника'",
      "customer.inn": "7755678901",
      contractor: "УЦ 'Промбезопасность'",
      "contractor.inn": "7755543210",
      payComment: "Аттестация стропальщика",
    },
    {
      number: "ACC006",
      type: "Экзамен",
      person: "Николаева Ольга Дмитриевна",
      qualification: "Медсестра высшей категории",
      summ: 4200,
      customer: "ГБУЗ 'Городская больница №1'",
      "customer.inn": "7766789012",
      contractor: "ЦПК 'Медицина'",
      "contractor.inn": "7766432109",
      payComment: "Квалификационный экзамен медсестры",
    },
    {
      number: "ACC007",
      type: "Аттестация",
      person: "Смирнов Алексей Владимирович",
      qualification: "Машинист крана 6 разряда",
      summ: 5500,
      customer: "ООО 'Крансервис'",
      "customer.inn": "7777890123",
      contractor: "УЦ 'Спецтехника'",
      "contractor.inn": "7777321098",
      payComment: "Аттестация машиниста крана",
    },
    {
      number: "ACC008",
      type: "Квалификация",
      person: "Федорова Татьяна Игоревна",
      qualification: "Кондитер 3 разряда",
      summ: 3700,
      customer: "ИП 'Сладкие традиции'",
      "customer.inn": "7788901234",
      contractor: "ЦОПК 'Кондитер'",
      "contractor.inn": "7788210987",
      payComment: "Присвоение разряда кондитеру",
    },
    {
      number: "ACC009",
      type: "Экзамен",
      person: "Григорьев Павел Александрович",
      qualification: "IT-специалист (тестировщик)",
      summ: 6000,
      customer: "АО 'СофтDev'",
      "customer.inn": "7799012345",
      contractor: "УЦ 'IT-Профи'",
      "contractor.inn": "7799109876",
      payComment: "Профессиональный экзамен тестировщика",
    },
    {
      number: "ACC010",
      type: "Аттестация",
      person: "Захарова Виктория Олеговна",
      qualification: "Лаборант химического анализа",
      summ: 4100,
      customer: "ООО 'ХимПром'",
      "customer.inn": "7800123456",
      contractor: "УЦ 'Химик'",
      "contractor.inn": "7800098765",
      payComment: "Аттестация лаборанта",
    },
  ];

  return (
    <div className="main-content">
      <div className="table-with-filter">
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
  );
};

export default App;
