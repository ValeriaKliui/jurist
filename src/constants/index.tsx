import VkIcon from '@assets/icons/vk.svg?react';
import IgIcon from '@assets/icons/ig.svg?react';
import TtIcon from '@assets/icons/tt.svg?react';
import FbIcon from '@assets/icons/fb.svg?react';
import BonusIcon from '@assets/icons/bonuses.svg?react';
import EducationIcon from '@assets/icons/education.svg?react';
import ProductIcon from '@assets/icons/product.svg?react';
import AuditoryIcon from '@assets/icons/auditory.svg?react';
import PartnershipIcon from '@assets/icons/partnership.svg?react';
import OpportunitiesIcon from '@assets/icons/opportunities.svg?react';
import HelpIcon from '@assets/icons/help.svg?react';
import TeamIcon from '@assets/icons/team.svg?react';
import ManIcon from '@assets/icons/man-laptop.svg?react';
import FamilyIcon from '@assets/icons/family.svg?react';

export const NAV_LINKS = [
  { name: 'О компании', link: '#' },
  { name: 'Услуги', link: '#' },
  { name: 'Sirius', link: '#' },
  { name: 'Тарифы', link: '#' },
  { name: 'FAQ', link: '#' },
  { name: 'Контакты', link: '#' },
];

export const NETWORKS = [
  { Icon: VkIcon, link: '#' },
  { Icon: IgIcon, link: '#' },
  { Icon: TtIcon, link: '#' },
  { Icon: FbIcon, link: '#' },
];

export const PROGNOSISES = [
  {
    prognose: '$2 млн.',
    text: 'Заработают партнеры ILC',
    gradientDeg: 143,
  },
  {
    prognose: '10 000+',
    text: 'Полисов будет оформлено по партнерским ссылкам',
    gradientDeg: 155,
  },
  {
    prognose: '800+',
    text: 'Партнеров присоединится к нам',
    gradientDeg: 187,
  },
  {
    prognose: '$1500',
    text: 'Средний доход партнера в месяц',
    gradientDeg: 189,
  },
];

export const ADVANTAGES = [
  {
    title: 'Высокие бонусы',
    Icon: BonusIcon,
    DescriptionComponent: (
      <>
        <p>
          Вы получаете до 35% от стоимости каждого полиса, который был
          куплен по вашей рекомендации.
        </p>
        <p className="subtext">
          К примеру: юридический полис “Международный бизнес” стоит
          $750/год, с него вы зарабатываете $260.
        </p>
      </>
    ),
  },
  {
    title: 'Полезный продукт',
    Icon: ProductIcon,
    DescriptionComponent: (
      <>
        <p>
          Сервис ILC — это ваша личная команда юристов, которая
          работает в формате “здесь и сейчас”, 24/7, без выходных.
        </p>
        <p>
          Нужна помощь? Всего 1 клик и персональный юрист ILC уже
          решает ваш вопрос.
          <span className="bold">
            {' '}
            Это в несколько раз дешевле и быстрее, чем искать частного
            специалиста.
          </span>
        </p>
      </>
    ),
  },
  {
    title: 'Широкая аудитория',
    Icon: AuditoryIcon,
    DescriptionComponent: (
      <>
        <p>
          Качественная юридическая помощь нужна абсолютно всем:
          бизнесу, семьям, крупным компаниям, экспертам и частным
          лицам.
        </p>
        <p>
          Рекомендуя полис ILC,
          <span className="bold"> вы помогаете людям </span>оперативно
          решать жизненные задачи в 1 клик.
        </p>
      </>
    ),
  },
  {
    title: 'Обучение и поддержка',
    Icon: EducationIcon,
    DescriptionComponent: (
      <>
        <p>
          Вы получите доступ в личный кабинет с подробной информацией
          о том, как:
        </p>
        <ul>
          <li>эффективно привлекать клиентов,</li>
          <li>отслеживать конверсию,</li>
          <li>
            повышать свой доход, обналичивать средства и многое
            другое.
          </li>
        </ul>
        <span className="bold">Мы поддержим вас на всех этапах.</span>
      </>
    ),
  },
];

export const BONUSES = [
  { Icon: HelpIcon, bonus: 'Юридическая поддержка 24/7' },
  {
    Icon: OpportunitiesIcon,
    bonus: 'Множество возможностей в одном полисе',
  },
  { Icon: PartnershipIcon, bonus: 'Бонусы партнерской программы' },
];

export const SUPPORT = [
  {
    Icon: TeamIcon, title: 'Бизнесу', description: 'Услуги профессиональных юристов для вашей компании по фиксированному тарифу — это в несколько раз выгоднее, чем содержать свой штат.'
  },
  {
    Icon: TeamIcon, title: 'StartUP проектам', description: 'Эксперты ILC помогут выбрать оптимальную правовую форму для ведения бизнеса, оптимизировать налоги и подготовить необходимый  пакет документов.'
  },
  { Icon: TeamIcon, title: 'Частным клиентам', description: 'Оперативные решения сложных вопросов в режиме онлайн: ДТП, наследство, страховые споры, земельные и имущественные процессы, защита прав.' },
];
