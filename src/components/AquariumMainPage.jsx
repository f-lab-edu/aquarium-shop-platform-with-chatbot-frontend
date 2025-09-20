"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";

const categories = [
  {
    name: "신제품",
    href: "#",
    imageSrc: "https://piscespets.com/cdn/shop/articles/aquarium-5650174_1280_1_800x.jpg?v=1717729343",
  },
  {
    name: "어항·수조",
    href: "#",
    imageSrc: "https://cdn.imweb.me/upload/S201812175c176258717b5/86be62f8e06f5.jpg",
  },
  {
    name: "여과장비",
    href: "#",
    imageSrc: "https://a-z-animals.com/media/2023/06/shutterstock-1915386694-huge-licensed-scaled.jpg",
  },
  {
    name: "조명·장식",
    href: "#",
    imageSrc: "https://coburgaquarium.com.au/cdn/shop/products/halfmoonbettafancy.jpg?v=1681367457",
  },
  {
    name: "특가상품",
    href: "#",
    imageSrc: "https://aquariumfishonline.com.au/wp-content/uploads/2023/03/Betta-Fighting-Fish-Platinum-halfmoon-Male.jpg",
  },
];

const collections = [
  {
    name: "초보자 세트",
    href: "#",
    imageSrc: "https://tropicflow.com/cdn/shop/articles/image5.jpg?v=1716523919",
    imageAlt: "수족관 초보자를 위한 완벽한 스타터 키트",
    description: "수족관을 처음 시작하는 분들을 위한 모든 것이 포함된 세트입니다.",
  },
  {
    name: "프리미엄 컬렉션",
    href: "#",
    imageSrc: "https://cdn.shopify.com/s/files/1/0311/3149/files/crowntail.jpg?v=1710555733",
    imageAlt: "고급 수족관 장비와 희귀 관상어들",
    description: "전문가들이 선별한 최고급 장비와 희귀한 관상어 컬렉션입니다.",
  },
  {
    name: "수초 정원",
    href: "#",
    imageSrc: "https://cdn.imweb.me/upload/S201812175c176258717b5/9eb76229aeb8b.png",
    imageAlt: "아름다운 수초로 꾸며진 네이처 수족관",
    description: "자연의 아름다움을 담은 수초 수족관 전용 상품들입니다.",
  },
];

const footerNavigation = {
  shop: [
    { name: "담수어", href: "#" },
    { name: "해수어", href: "#" },
    { name: "수초", href: "#" },
    { name: "장비", href: "#" },
    { name: "사료", href: "#" },
  ],
  company: [
    { name: "회사소개", href: "#" },
    { name: "지속가능성", href: "#" },
    { name: "보도자료", href: "#" },
    { name: "채용", href: "#" },
    { name: "이용약관", href: "#" },
    { name: "개인정보처리방침", href: "#" },
  ],
  account: [
    { name: "계정관리", href: "#" },
    { name: "반품·교환", href: "#" },
    { name: "상품권 사용", href: "#" },
  ],
  connect: [
    { name: "고객센터", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

export default function AquariumMainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">메뉴 닫기</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  회원가입
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  로그인
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Hero section */}
      <div className="relative bg-blue-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img alt="" src="https://cdn.imweb.me/upload/S201812175c176258717b5/6c343adf34100.jpg" className="size-full object-cover" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900/75" />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-white/10 backdrop-blur-md backdrop-filter">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="#">
                        <span className="sr-only">이웃집 수족관</span>
                        <div className="text-2xl font-bold text-white">이웃집 수족관</div>
                      </a>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button type="button" onClick={() => setMobileMenuOpen(true)} className="-ml-2 p-2 text-white">
                        <span className="sr-only">메뉴 열기</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                      </button>

                      <a href="#" className="ml-2 p-2 text-white">
                        <span className="sr-only">검색</span>
                        <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">이웃집 수족관</span>
                      <div className="text-xl font-bold text-white">이웃집 수족관</div>
                    </a>

                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <a href="#" className="hidden text-sm font-medium text-white lg:block">
                          검색
                        </a>
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                          로그인
                        </a>
                        <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                          회원가입
                        </a>
                        <a href="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">도움말</span>
                          <QuestionMarkCircleIcon aria-hidden="true" className="size-6" />
                        </a>
                        <a href="#" className="hidden text-sm font-medium text-white lg:block">
                          고객센터
                        </a>

                        <div className="ml-4 flow-root lg:ml-8">
                          <a href="#" className="group -m-2 flex items-center p-2">
                            <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 text-white" />
                            <span className="ml-2 text-sm font-medium text-white">0</span>
                            <span className="sr-only">장바구니 아이템, 장바구니 보기</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">수중 세상의 모든 것</h1>
          <p className="mt-4 text-xl text-white">
            아름다운 관상어와 수족관 용품으로 당신만의 특별한 수중 세상을 만들어보세요. 베타, 구피부터 전문 장비까지 초보자부터 애호가까지
            모든 분들을 위한 완벽한 수족관 용품을 제공합니다.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            신제품 쇼핑하기
          </a>
        </div>
      </div>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              카테고리별 쇼핑
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-blue-600 hover:text-blue-500 sm:block">
              모든 카테고리 보기
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img alt="" src={category.imageSrc} className="size-full object-cover" />
                      </span>
                      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-blue-600 hover:text-blue-500">
              모든 카테고리 보기
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="social-impact-heading" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img alt="" src="https://cdn.imweb.me/upload/S201812175c176258717b5/5cc1a0fddac51.jpg" className="size-full object-cover" />
            </div>
            <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">나만의</span>
                  <span className="block sm:inline"> 수중정원</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  자연의 아름다움을 그대로 담은 수초 수족관으로 집안에 작은 자연을 만들어보세요. 전문가가 선별한 고품질 수초와 장비로 완벽한
                  수중 생태계를 구현할 수 있습니다.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  수초 용품 쇼핑
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section aria-labelledby="collection-heading" className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            추천 컬렉션
          </h2>
          <p className="mt-4 text-base text-gray-500">
            수족관 전문가들이 엄선한 테마별 상품 컬렉션으로 더 쉽고 완벽한 수족관을 만들어보세요.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a key={collection.name} href={collection.href} className="group block">
                <img
                  alt={collection.imageAlt}
                  src={collection.imageSrc}
                  className="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]"
                />
                <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img alt="" src="https://cdn.imweb.me/upload/S201812175c176258717b5/f7d7955a0ce6c.jpg" className="size-full object-cover" />
            </div>
            <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  전문가의 케어 시스템
                </h2>
                <p className="mt-3 text-xl text-white">
                  복잡한 관리 시스템은 이제 그만. 스마트 자동화 장비와 전문가의 맞춤 관리 서비스로 누구나 쉽게 건강하고 아름다운 수족관을
                  유지할 수 있습니다.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  관리 시스템 보기
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          푸터
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">쇼핑</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">회사</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">계정</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">소통</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
