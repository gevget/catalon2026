/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import logisticsRoadImage from '../2.png';
import logisticsMultiImage from '../3.png';
import earningSolutionImage from '../4.png';
import savingsServicesImage from '../5.png';
import safeDealImage from '../6.png';
import tripFinanceImage from '../7.png';
import bigBusinessToolsImage from '../8.png';
import digitalEcosystemImage from '../9.png';
import heroImage from '../hero1.png';
import portalRequestsImage from '../a1.png';
import portalTripCardImage from '../a2.png';
import portalDocumentsImage from '../a3.png';
import portalFinanceImage from '../a4.png';
import portalServicesImage from '../a5.png';
import portalOperatorImage from '../a6.png';
import carrierFreeLoadsScreen from '../Перевозчик Свободные грузы.png';
import marketCustomerImage from '../b1.png';
import marketCarrierImage from '../b2.png';
import marketOperatorImage from '../b3.png';
import headerLogo from '../Group 3320.svg';
import {
  BarChart2,
  ClipboardList,
  CreditCard,
  FileCheck,
  FileText,
  Fuel,
  HelpCircle,
  Map,
  Menu,
  Shield,
  ShieldCheck,
  ShoppingBag,
  TrendingDown,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import { LargeSolutionCard } from './components/LargeSolutionCard';
import { ServiceCard } from './components/ServiceCard';
import { SolutionCard, SolutionCardProps } from './components/SolutionCard';

export default function LandingPage() {
  const navItems = [
    { label: 'О платформе', href: '#about' },
    { label: 'Решения', href: '#solutions' },
    { label: 'Сервисы', href: '#safe-deal' },
    { label: 'Портал', href: '#portal' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const activeSolutions = [
    {
      title: 'Автомобильные перевозки по РФ',
      description:
        'FTL / LTL перевозки, заявки, перевозчики, документы, безопасная сделка и финансирование рейса в одном портале.',
      points: [
        'Перевозки по России',
        'Грузы и перевозчики',
        'Безопасная сделка',
        'Документы онлайн',
        'Финансирование рейса',
        'Сервисы для экономии',
      ],
      cta: 'Подробнее',
      placeholder: 'road-freight-cat',
      imageSrc: logisticsRoadImage,
      imageAlt: 'Автоперевозки по России',
      link: '/solutions/road-freight-russia',
      bgColor: 'white',
      borderColor: 'border-[#B7FF2A]',
      h3BorderColor: 'border-gray-200',
      pBorderColor: 'border-gray-200',
      textColor: 'text-gray-900',
      descriptionColor: 'text-gray-600',
    },
    {
      title: 'Мультимодальные / контейнерные перевозки',
      description:
        'Контейнерные и мультимодальные маршруты с управлением заявкой, документами и этапами перевозки через Catalon.',
      points: [
        'Контейнерные перевозки',
        'Комбинированные маршруты',
        'Международная логистика',
        'Контроль этапов',
        'Документы онлайн',
        'Сопровождение сделки',
      ],
      cta: 'Подробнее',
      placeholder: 'container-solution-cat',
      imageSrc: logisticsMultiImage,
      imageAlt: 'Мультимодальные и контейнерные перевозки',
      link: '/solutions/multimodal-container',
      bgColor: 'white',
      borderColor: 'border-[#7133D0]',
      h3BorderColor: 'border-gray-200',
      pBorderColor: 'border-gray-200',
      textColor: 'text-gray-900',
      descriptionColor: 'text-gray-600',
    },
  ];

  const allSolutions: SolutionCardProps[] = [
    {
      ...activeSolutions[0],
      active: true,
      color: 'bg-green-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
    },
    {
      ...activeSolutions[1],
      active: true,
      color: 'bg-purple-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
    },
    { title: 'Международные автомобильные перевозки', active: false, color: 'bg-lime' },
    { title: 'Доставка сборных грузов по РФ', active: false, color: 'bg-cyan' },
    { title: 'Международная доставка сборных грузов', active: false, color: 'bg-purple-dark' },
    { title: 'Авиаперевозки', active: false, color: 'bg-orange' },
    { title: 'Железнодорожные перевозки', active: false, color: 'bg-lime' },
    { title: 'Негабаритные перевозки', active: false, color: 'bg-cyan' },
    { title: 'Таможенное оформление', active: false, color: 'bg-purple-dark' },
    { title: 'Аренда спецтехники', active: false, color: 'bg-orange' },
    { title: 'Перевозка опасных грузов', active: false, color: 'bg-lime' },
    { title: 'Такелажные работы', active: false, color: 'bg-cyan' },
  ];

  const heroTags = [
    'Безопасная сделка',
    'Финансирование рейса',
    'Все онлайн',
    'Документы в одном месте',
    'Сервисы для экономии',
  ];

  const portalCards = [
    { title: 'Заявки', desc: 'Создавайте и находите перевозки.', image: portalRequestsImage },
    {
      title: 'Карточка рейса',
      desc: 'Маршрут, груз, сроки, стоимость и участники.',
      image: portalTripCardImage,
    },
    {
      title: 'Документооборот',
      desc: 'Заявки, договоренности и закрывающие документы в одном месте.',
      image: portalDocumentsImage,
    },
    {
      title: 'Финансы',
      desc: 'Условия оплаты, финансирование и контроль расчетов.',
      image: portalFinanceImage,
    },
    {
      title: 'Сервисы',
      desc: 'Топливо, страхование, лизинг, запчасти и сервисы.',
      image: portalServicesImage,
    },
    {
      title: 'Рабочее место оператора',
      desc: 'Сопровождение заявок, статусов, документов и коммуникации.',
      image: portalOperatorImage,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#440D84] backdrop-blur">
        <div className="flex h-14 w-full items-center justify-between px-6 lg:px-10">
          <a href="#" className="flex items-center">
            <img src={headerLogo} alt="Catalon" className="h-7 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-[#B7FF2A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <button className="rounded-full border border-[#B7FF2A] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#B7FF2A] transition-colors hover:bg-[#B7FF2A] hover:text-[#440D84]">
              Войти
            </button>
            <a
              href="#contacts"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#440D84] transition-colors hover:bg-white/90"
            >
              Регистрация
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#B7FF2A]/40 text-[#B7FF2A] lg:hidden"
            aria-label="Открыть меню"
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section
          className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"
          id="about"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-tr from-purple-main/5 to-transparent" />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-main">
                B2B marketplace грузоперевозок
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Marketplace логистических решений для B2B-грузоперевозок
              </h1>
              <p className="mt-6 text-sm text-gray-600">
                Catalon помогает находить грузы и перевозчиков, проводить безопасные сделки,
                получать финансирование рейсов и экономить через сервисы экосистемы.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#B7FF2A] px-8 py-3.5 text-sm font-semibold text-purple-dark transition-all hover:scale-105 hover:bg-[#B7FF2A]/90 active:scale-95">
                  Начать работу
                </button>
                <button className="text-sm font-semibold text-gray-900 transition-colors hover:text-purple-main">
                  Посмотреть решения →
                </button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 -z-10 rounded-[48px] bg-gradient-to-br from-purple-main/10 to-lime/10 blur-3xl" />

              <div className="relative aspect-square w-full max-w-[42rem]">
                <img
                  src={heroImage}
                  alt="Главный экран Catalon"
                  className="block h-full w-full object-contain"
                />
              </div>

              <div className="hidden absolute -left-6 -top-6 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                FTL / LTL
              </div>
              <div className="hidden absolute -right-6 top-1/4 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                Финансирование
              </div>
              <div className="hidden absolute -left-6 bottom-1/4 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                Документы онлайн
              </div>
              <div className="hidden absolute -bottom-6 -right-6 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                Сервисы
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24" id="solutions">
          <h2 className="text-3xl font-bold">Активные решения Catalon</h2>
          <p className="mt-4 text-gray-600">
            Рабочие направления, с которых начинается marketplace Catalon.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {activeSolutions.map((solution) => (
              <LargeSolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl rounded-[36px] bg-gray-50 px-4 py-16 lg:px-8 lg:py-24" id="catalog">
          <h2 className="text-center text-3xl font-bold">Catalon помогает зарабатывать и экономить</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            Решения открывают новые направления для заработка, а сервисы помогают снижать
            расходы на перевозки, транспорт и обслуживание бизнеса.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[36px] border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Решения помогают зарабатывать</h3>
              <p className="mt-4 text-sm text-gray-600">
                Получайте грузы, выходите на новые направления, загружайте транспорт и
                работайте с заказами через цифровой портал Catalon.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  { text: 'Заявки и рейсы', icon: ClipboardList },
                  { text: 'Новые маршруты', icon: Map },
                  { text: 'Доступ к заказчикам', icon: Users },
                  { text: 'Безопасная сделка', icon: ShieldCheck },
                  { text: 'Финансирование поездки', icon: CreditCard },
                ].map((point) => (
                  <li key={point.text} className="flex items-center gap-2 text-sm text-gray-700">
                    <point.icon className="h-4 w-4 text-purple-main" /> {point.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-center text-gray-500">
                <img
                  src={earningSolutionImage}
                  alt="Решения помогают зарабатывать"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="rounded-[36px] border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Сервисы помогают экономить</h3>
              <p className="mt-4 text-sm text-gray-600">
                Подключайте топливо, страхование, лизинг, запчасти, автосервис и юридическую
                поддержку внутри одной экосистемы.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  { text: 'Снижение расходов', icon: TrendingDown },
                  { text: 'Топливные программы', icon: Fuel },
                  { text: 'Сервисы для автопарка', icon: Wrench },
                  { text: 'Финансовые инструменты', icon: Wallet },
                  { text: 'Поддержка бизнеса', icon: HelpCircle },
                ].map((point) => (
                  <li key={point.text} className="flex items-center gap-2 text-sm text-gray-700">
                    <point.icon className="h-4 w-4 text-purple-main" /> {point.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-center text-gray-500">
                <img
                  src={savingsServicesImage}
                  alt="Сервисы помогают экономить"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl rounded-[36px] bg-gray-50 px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="text-3xl font-bold">Каталог решений Catalon</h2>
          <p className="mt-4 text-sm text-gray-600">
            Сейчас доступны два активных направления. Остальные решения находятся в разработке
            и будут постепенно подключаться к marketplace.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {allSolutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl rounded-[36px] bg-[#7133D0] px-4 py-16 text-white lg:px-8 lg:py-24"
          id="safe-deal"
        >
              <h2 className="text-center text-3xl font-bold sm:text-4xl"><span className="text-[#B7FF2A]">Безопасная сделка</span> - ключевое отличие Catalon</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70">
            На рынке грузоперевозок многое до сих пор держится на звонках, переписках и личных
            договоренностях. Catalon переводит сделку в прозрачный онлайн-контур.
          </p>
          <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Фиксация условий',
                  desc: 'Маршрут, стоимость, сроки, участники и ключевые условия перевозки сохраняются внутри платформы.',
                  icon: FileCheck,
                },
                {
                  title: 'Документы онлайн',
                  desc: 'Заявки, договоренности и закрывающие документы хранятся в одном месте.',
                  icon: FileText,
                },
                {
                  title: 'Контроль этапов',
                  desc: 'Участники видят статусы перевозки и ключевые шаги сделки.',
                  icon: BarChart2,
                },
                {
                  title: 'Меньше рисков',
                  desc: 'Catalon помогает снизить риск неоплаты, срыва перевозки и потери документов.',
                  icon: Shield,
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h4 className="flex items-center gap-2 font-bold text-lime">
                    <item.icon className="h-5 w-5" /> {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img
                src={safeDealImage}
                alt="Безопасная сделка Catalon"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24" id="services">
          <div className="grid grid-cols-1 items-center gap-12 rounded-[48px] bg-[#BA9AF0] p-12 text-white lg:grid-cols-2 lg:p-16">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {['Рейс', 'Топливо', 'Расходы', 'Оплата'].map((badge) => (
                  <span key={badge} className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold">
                    {badge}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl"><span className="text-[#241047]">Финансирование поездки</span> <span className="text-white">под конкретный рейс</span></h2>
              <p className="mt-6 text-sm text-white/80">
                Перевозчику не всегда удобно ждать оплату неделями. Catalon помогает закрывать
                расходы на рейс: топливо, дорогу, обслуживание и другие операционные затраты.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { text: 'Деньги под конкретную перевозку', icon: CreditCard },
                  { text: 'Помощь при кассовом разрыве', icon: Wallet },
                  { text: 'Возможность брать больше заказов', icon: ShoppingBag },
                  { text: 'Меньше зависимости от долгих отсрочек', icon: TrendingDown },
                  { text: 'Финансовая поддержка внутри marketplace', icon: ShieldCheck },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-white">
                    <item.icon className="h-5 w-5 text-[#B7FF2A]" /> {item.text}
                  </li>
                ))}
              </ul>
              <button className="mt-10 rounded-full bg-[#B7FF2A] px-8 py-4 font-semibold text-purple-dark hover:bg-[#B7FF2A]/90">
                Узнать о финансировании
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={tripFinanceImage}
                alt="Финансирование поездки под конкретный рейс"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24" id="portal">
          <h2 className="text-center text-3xl font-bold">Сервисы Catalon помогают экономить</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            Подключайте сервисы экосистемы, чтобы снижать расходы на рейсы, транспорт,
            обслуживание и сопровождение бизнеса.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Catalon Топливо"
              description="Снижайте расходы на топливо и контролируйте затраты на рейсы."
              gradient="from-[#FFD43B] to-[#F59E0B]"
              badge="Экономия"
            />
            <ServiceCard
              title="Catalon Финанс"
              description="Закрывайте кассовые разрывы и получайте поддержку под поездки."
              gradient="from-[#4B1D8B] to-[#B7FF2A]"
              badge="Поддержка"
            />
            <ServiceCard
              title="Catalon Страхование"
              description="Защищайте грузы, транспорт и ответственность участников сделки."
              gradient="from-[#2F7DFF] to-[#20D6FF]"
              badge="Защита"
            />
            <ServiceCard
              title="Catalon Лизинг"
              description="Расширяйте автопарк и обновляйте транспорт под реальные задачи."
              gradient="from-[#4B1D8B] to-[#FF8A00]"
              badge="Экономия"
            />
            <ServiceCard
              title="Catalon Шины, запчасти и масла"
              description="Закупайте расходники и комплектующие для транспорта."
              gradient="from-[#19151F] to-[#B7FF2A]"
              badge="Сервис"
            />
            <ServiceCard
              title="Catalon Торговый дом"
              description="Получайте доступ к B2B-закупкам и партнерским предложениям."
              gradient="from-[#FF5BAA] to-[#FF8A00]"
              badge="Партнерство"
            />
            <ServiceCard
              title="Catalon Автосервис / мойки / шиномонтажи"
              description="Обслуживайте транспорт через партнерскую сервисную сеть."
              gradient="from-[#FF8A00] to-[#FF3B30]"
              badge="Сервис"
            />
            <ServiceCard
              title="Юридический сервис"
              description="Договоры, претензии, споры и сопровождение сделок."
              gradient="from-[#241047] to-[#2F7DFF]"
              badge="Поддержка"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24" id="audience">
          <h2 className="text-center text-3xl font-bold">Все управление перевозками - онлайн</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            Catalon собирает заявки, сделки, документы, статусы, финансирование и сервисы в
            одном цифровом портале.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portalCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="block h-auto w-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold">{card.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-16 px-6 pb-10">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 rounded-[36px] bg-[#440D84]" />
            <div className="pointer-events-none absolute inset-x-12 bottom-6 h-14 rounded-full bg-black/35 blur-3xl" />
            <img
              src={carrierFreeLoadsScreen}
              alt="Скрин платформы Catalon"
              className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="text-center text-3xl font-bold">Для участников рынка грузоперевозок</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-[28px] border border-gray-200 border-t-4 border-t-green-500 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-2xl font-bold">Заказчикам</h3>
              <p className="mt-4 text-sm text-gray-600">
                Размещайте заявки, находите перевозчиков, фиксируйте условия и проводите сделки
                безопаснее.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src={marketCustomerImage}
                  alt="Заказчикам"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="rounded-[28px] border border-gray-200 border-t-4 border-t-purple-600 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-2xl font-bold">Перевозчикам</h3>
              <p className="mt-4 text-sm text-gray-600">
                Получайте рейсы, загружайте транспорт, подключайте финансирование и
                зарабатывайте больше.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src={marketCarrierImage}
                  alt="Перевозчикам"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="rounded-[28px] border border-gray-200 border-t-4 border-t-blue-400 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-2xl font-bold">Операторам</h3>
              <p className="mt-4 text-sm text-gray-600">
                Сопровождайте заявки, документы, статусы и коммуникацию между участниками
                перевозки.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src={marketOperatorImage}
                  alt="Операторам"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 rounded-[48px] bg-[#350375] p-12 text-white lg:grid-cols-2 lg:p-16">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-[#B7FF2A]">Возможности</span> больших компаний - для малого и среднего бизнеса
              </h2>
              <p className="mt-6 text-sm text-white/80">
                Catalon помогает небольшим перевозчикам и компаниям получать доступ к
                инструментам, которые обычно доступны крупным игрокам: финансированию, сервисам,
                безопасным сделкам, топливным программам и цифровому документообороту.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { text: 'Финансирование рейсов', icon: CreditCard },
                  { text: 'Топливные программы', icon: Fuel },
                  { text: 'Страхование', icon: Shield },
                  { text: 'Лизинг', icon: Wallet },
                  { text: 'Сервисы для транспорта', icon: Wrench },
                  { text: 'Документы онлайн', icon: FileText },
                  { text: 'Безопасные сделки', icon: ShieldCheck },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm">
                    <item.icon className="h-5 w-5 text-lime" /> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={bigBusinessToolsImage}
                alt="Возможности больших компаний для малого и среднего бизнеса"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl bg-white px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Catalon строит цифровую экосистему грузоперевозок</h2>
              <p className="mt-6 text-sm text-gray-600">
                Catalon объединяет логистические решения, сервисы, участников рынка и цифровые
                инструменты в одном marketplace. Мы помогаем бизнесу зарабатывать на
                перевозках, снижать расходы через сервисы и проводить сделки прозрачнее.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-lime" /> Развиваем marketplace логистических
                  решений
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-lime" /> Подключаем сервисы для экономии
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-lime" /> Переводим сделки, документы и
                  финансирование в онлайн-контур
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={digitalEcosystemImage}
                alt="Catalon строит цифровую экосистему грузоперевозок"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { stat: '2', label: 'активных решения' },
              { stat: '10', label: 'решений в разработке' },
              { stat: '8', label: 'сервисов экосистемы' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-purple-dark">
                  <span>{item.stat}</span>
                  {item.stat === '2' ? (
                    <span
                      className="mt-1 inline-block h-3 w-3 rounded-full bg-[#B7FF2A]"
                      style={{ animation: 'catalon-pulse 1.2s ease-in-out infinite' }}
                    />
                  ) : null}
                </div>
                <div className="mt-2 text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="hidden mx-auto max-w-7xl rounded-[48px] bg-[#440D84] px-4 py-16 lg:px-8 lg:py-24" aria-hidden="true">
          <h2 className="text-center text-3xl font-bold">Посмотрите, как выглядит портал</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            Скриншоты интерфейса покажут путь от заявки до сделки, документов, финансирования и
            сервисов.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: 'ui-screen-requests.png', label: 'Заявки' },
              { id: 'ui-screen-deal.png', label: 'Безопасная сделка' },
              { id: 'ui-screen-documents.png', label: 'Документы' },
              { id: 'ui-screen-services.png', label: 'Сервисы' },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex h-64 items-center justify-center rounded-[16px] bg-gray-100 font-semibold text-gray-400">
                  [PNG_PLACEHOLDER: {item.id}]
                </div>
                <div className="hidden" aria-hidden="true">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto my-16 max-w-7xl overflow-hidden rounded-[48px] bg-[#2F0A63] px-4 py-24 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(185,122,255,0.18)_0%,rgba(47,10,99,0)_38%,rgba(183,255,42,0.12)_100%)]" />
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#B7FF2A]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/8 blur-3xl" />
          <div className="relative text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Начните работать в Catalon</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-white/80">
              Выберите решение, зарегистрируйтесь в портале и подключайте сервисы для
              заработка, безопасности и экономии.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-purple-900 hover:bg-lime-300">
                Зарегистрироваться
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10">
                Получить консультацию
              </button>
            </div>
          </div>
          <div className="absolute left-10 top-10 hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:block">
            Зарабатывать
          </div>
          <div className="absolute bottom-10 right-10 hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:block">
            Экономить
          </div>
          <div className="absolute right-20 top-1/4 hidden rounded-full border border-white/10 bg-[#3D1180] px-4 py-2 text-sm font-semibold text-white lg:block">
            Безопасная сделка
          </div>
          <div className="absolute bottom-1/4 left-20 hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:block">
            Финансирование
          </div>
          <div className="absolute left-10 top-1/2 hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:block">
            Документы онлайн
          </div>
        </section>
      </main>

      <footer className="bg-[#12071F] pt-18 text-white" id="contacts">
        <div className="mx-auto max-w-7xl px-4 pb-14">
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <img src={headerLogo} alt="Catalon" className="h-10 w-auto" />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
                Цифровой marketplace логистических решений для грузоперевозок, безопасных
                сделок, финансирования рейсов и сервисов для экономии бизнеса.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                <a href="mailto:info@catalon.ru" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#B7FF2A] hover:text-[#B7FF2A]">
                  info@catalon.ru
                </a>
                <a href="tel:+78000000000" className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#B7FF2A] hover:text-[#B7FF2A]">
                  +7 800 000-00-00
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Навигация</h4>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li><a href="#about" className="transition hover:text-[#B7FF2A]">О платформе</a></li>
                <li><a href="#solutions" className="transition hover:text-[#B7FF2A]">Активные решения</a></li>
                <li><a href="#catalog" className="transition hover:text-[#B7FF2A]">Каталог решений</a></li>
                <li><a href="#portal" className="transition hover:text-[#B7FF2A]">Портал</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Решения и сервисы</h4>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li><a href="#safe-deal" className="transition hover:text-[#B7FF2A]">Безопасная сделка</a></li>
                <li><a href="#services" className="transition hover:text-[#B7FF2A]">Финансирование рейса</a></li>
                <li><a href="#services" className="transition hover:text-[#B7FF2A]">Сервисы экосистемы</a></li>
                <li><a href="#audience" className="transition hover:text-[#B7FF2A]">Для участников рынка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Контакты</h4>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li>Россия, Москва</li>
                <li>Пн-Пт, 09:00-18:00</li>
                <li><a href="mailto:info@catalon.ru" className="transition hover:text-[#B7FF2A]">info@catalon.ru</a></li>
                <li><a href="tel:+78000000000" className="transition hover:text-[#B7FF2A]">+7 800 000-00-00</a></li>
                <li><a href="https://t.me/" target="_blank" rel="noreferrer" className="transition hover:text-[#B7FF2A]">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 py-5 text-sm text-white/55 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img src={headerLogo} alt="Catalon" className="h-7 w-auto opacity-90" />
              <span>Catalon, все права защищены</span>
            </div>
            <a
              href="https://tolk-usite.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              TOLK+Usite
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
