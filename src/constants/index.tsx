import AuditoryIcon from "@assets/icons/auditory.svg?react";
import TeamIcon from "@assets/icons/biznes.svg?react";
import BonusIcon from "@assets/icons/bonuses.svg?react";
import EducationIcon from "@assets/icons/education.svg?react";
import FamilyIcon from "@assets/icons/fam.svg?react";
import FbIcon from "@assets/icons/fb.svg?react";
import HelpIcon from "@assets/icons/help.svg?react";
import IgIcon from "@assets/icons/ig.svg?react";
import OpportunitiesIcon from "@assets/icons/opportunities.svg?react";
import PartnershipIcon from "@assets/icons/partnership.svg?react";
import ProductIcon from "@assets/icons/product.svg?react";
import ManIcon from "@assets/icons/startup.svg?react";
import TtIcon from "@assets/icons/tt.svg?react";
import VkIcon from "@assets/icons/vk.svg?react";

export const NAV_LINKS = [
  { name: "О компании", link: "#" },
  { name: "Услуги", link: "#" },
  { name: "Sirius", link: "#" },
  { name: "Тарифы", link: "#" },
  { name: "FAQ", link: "#" },
  { name: "Контакты", link: "#" },
];

export const NETWORKS = [
  { Icon: VkIcon, link: "#" },
  { Icon: IgIcon, link: "#" },
  { Icon: TtIcon, link: "#" },
  { Icon: FbIcon, link: "#" },
];

export const PROGNOSISES = [
  {
    prognose: "$2 млн.",
    text: "Заработают партнеры ILC",
    gradientDeg: 143,
  },
  {
    prognose: "10 000+",
    text: "Полисов будет оформлено по партнерским ссылкам",
    gradientDeg: 155,
  },
  {
    prognose: "800+",
    text: "Партнеров присоединится к нам",
    gradientDeg: 187,
  },
  {
    prognose: "$1500",
    text: "Средний доход партнера в месяц",
    gradientDeg: 189,
  },
];

export const ADVANTAGES = [
  {
    title: "Высокие бонусы",
    Icon: BonusIcon,
    DescriptionComponent: (
      <>
        <p>
          Вы получаете до 35% от стоимости каждого полиса, который был куплен по
          вашей рекомендации.
        </p>
        <p className="subtext">
          К примеру: юридический полис “Международный бизнес” стоит $750/год, с
          него вы зарабатываете $260.
        </p>
      </>
    ),
  },
  {
    title: "Полезный продукт",
    Icon: ProductIcon,
    DescriptionComponent: (
      <>
        <p>
          Сервис ILC — это ваша личная команда юристов, которая работает в
          формате “здесь и сейчас”, 24/7, без выходных.
        </p>
        <p>
          Нужна помощь? Всего 1 клик и персональный юрист ILC уже решает ваш
          вопрос.
          <span className="bold">
            {" "}
            Это в несколько раз дешевле и быстрее, чем искать частного
            специалиста.
          </span>
        </p>
      </>
    ),
  },
  {
    title: "Широкая аудитория",
    Icon: AuditoryIcon,
    DescriptionComponent: (
      <>
        <p>
          Качественная юридическая помощь нужна абсолютно всем: бизнесу, семьям,
          крупным компаниям, экспертам и частным лицам.
        </p>
        <p>
          Рекомендуя полис ILC,
          <span className="bold"> вы помогаете людям </span>оперативно решать
          жизненные задачи в 1 клик.
        </p>
      </>
    ),
  },
  {
    title: "Обучение и поддержка",
    Icon: EducationIcon,
    DescriptionComponent: (
      <>
        <p>
          Вы получите доступ в личный кабинет с подробной информацией о том,
          как:
        </p>
        <ul>
          <li>эффективно привлекать клиентов,</li>
          <li>отслеживать конверсию,</li>
          <li>повышать свой доход, обналичивать средства и многое другое.</li>
        </ul>
        <span className="bold">Мы поддержим вас на всех этапах.</span>
      </>
    ),
  },
];

export const BONUSES = [
  { Icon: HelpIcon, bonus: "Юридическая поддержка 24/7" },
  {
    Icon: OpportunitiesIcon,
    bonus: "Множество возможностей в одном полисе",
  },
  { Icon: PartnershipIcon, bonus: "Бонусы партнерской программы" },
];

export const SUPPORT = [
  {
    Icon: TeamIcon,
    title: "Бизнесу",
    description:
      "Услуги профессиональных юристов для вашей компании по фиксированному тарифу — это в несколько раз выгоднее, чем содержать свой штат.",
  },
  {
    Icon: ManIcon,
    title: "StartUP проектам",
    description:
      "Эксперты ILC помогут выбрать оптимальную правовую форму для ведения бизнеса, оптимизировать налоги и подготовить необходимый  пакет документов.",
  },
  {
    Icon: FamilyIcon,
    title: "Частным клиентам",
    description:
      "Оперативные решения сложных вопросов в режиме онлайн: ДТП, наследство, страховые споры, земельные и имущественные процессы, защита прав.",
  },
];
import AccessIcon from "@assets/icons/access.svg?react";
import CalculatorIcon from "@assets/icons/calculator.svg?react";
import ConstructorIcon from "@assets/icons/constructor.svg?react";
import FormatIcon from "@assets/icons/format.svg?react";
import PriceIcon from "@assets/icons/price.svg?react";

export const BENEFITS = [
  {
    Icon: FormatIcon,
    title: "Удобный формат ",
    description:
      "Консультируем 24/7 в любом удобном формате: чат, аудио-звонок, c помощью искусственного интеллекта Sirius в личном кабинете.",
  },
  {
    Icon: PriceIcon,
    title: "Доступная цена",
    description:
      "Выбирайте комфортный для себя пакет юридической поддержки, оплачивая только то, что действительно нужно. ",
  },
  {
    Icon: CalculatorIcon,
    title: "Налоговый калькулятор ",
    description:
      "Точный расчет налоговой нагрузки за считанные минуты с помощью телеграм-бота ILC_tax — это быстро и удобно!",
  },
  {
    Icon: ConstructorIcon,
    title: "Конструктор документов ",
    description:
      "Доступ к более чем 9500 готовых и проработанных документов для бизнеса — бесплатно!",
  },
  {
    Icon: AccessIcon,
    title: "Бесплатный доступ для всех, кто зарегистрируется ",
    description:
      "Конструктор с ограниченным количеством документов на базе телеграм-бота",
  },
];
export const BENEFITS_LIST = [
  "работает 24/7",
  "100% точность и корректность ответов",
  "при необходимости, подключает живого специалиста",
  "не берет больничный и никогда не уволится ",
];

export const TARIFFS = [
  {
    name: "Легкий старт",
    points: [
      "Конструктор документов",
      "Личный кабинет (базовая версия)",
      "Sirius",
      "1 устная первичная консультация по правовому запросу",
    ],
    auditory: "Для ознакомления с сервисом и его возможностями",
    price: "Бесплатно",
  },
  {
    name: "Стандарт",
    points: [
      "Бесплатная телефонная линия + функция “перезвоните мне” ",
      "Доступ к первому юридическому интеллекту Sirius 24/7",
      "Личный кабинет (полная версия)",
      "Конструктор документов",
      "Устные и письменные консультации юристов 24/7",
    ],
    auditory: "Для физических лиц",
    price: 28,
  },
  {
    name: "бизнес-консультант",
    points: [
      "Бесплатная телефонная линия + функция “перезвоните мне” ",
      "Доступ к первому юридическому интеллекту Sirius 24/7",
      "Пакет документов для открытия бизнеса в РФ",
      "Сопровождение сделок ",
      "Устные и письменные консультации юристов 24/7",
    ],
    auditory: "Для частных лиц и фрилансеров",
    price: 38,
  },
  {
    name: "бизнес-премиум",
    points: [
      "Разработка уникальных договоров любой сложности",
      "Доступ к первому юридическому интеллекту Sirius 24/7",
      "Регистрация компаний и открытия счетов в РФ",
      "Сопровождение сделок любой сложности",
      "Устные и письменные консультации юристов 24/7",
    ],
    auditory: "Для среднего бизнеса",
    price: 49,
  },
  {
    name: "международный бизнес",
    points: [
      "Разработка уникальных договоров любой сложности",
      "Консультации и сопровождение по регистрации компаний и банковских счетов по всему миру",
      "Оказание юридических услуг на английском языке",
      "Консультации по международному праву",
      "Сопровождение сделок любой сложности",
    ],
    auditory: "Для ведения бизнеса за рубежом",
    price: 98,
  },
];
