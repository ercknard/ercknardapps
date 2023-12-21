"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  NewspaperIcon,
  DocumentIcon,
  CircleStackIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const projects = [
  {
    name: "Swap",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    icon: ArrowPathIcon,
  },
  {
    name: "Real Yield NFT",
    description: "some details",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Staking",
    description: "some details",
    href: "#staking",
    icon: CircleStackIcon,
  },
  {
    name: "Docs",
    description: "some details",
    href: "https://docs.sdao.pro/",
    icon: DocumentIcon,
  },
  {
    name: "Guild",
    description: "some details",
    href: "https://guild.xyz/starseeds-protocol-11e636",
    icon: UserGroupIcon,
  },
  {
    name: "News",
    description: "some details",
    href: "https://sdao.pro/read",
    icon: NewspaperIcon,
  },
];
const callsToAction = [
  {
    name: "Email",
    href: "https://github.com/Cryptech-Services",
    icon: EmailIcon,
  },
  {
    name: "Github",
    href: "https://github.com/Cryptech-Services",
    icon: GitHubIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navi-main relative z-30">
      <nav
        className="mx-auto flex w-full items-center justify-between p-6 absolute left-1/2 -translate-x-1/2"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1 gap-3">
          <a href="#">
            <span className="sr-only">Starseeds</span>
            <Image
              className="h-12 w-auto rounded-full"
              src="/images/metatron-logo.webp"
              alt=""
              width={256}
              height={256}
            />
          </a>
          <span className="text-5xl font-bold text-[#ffffff] main-font mt-2 tracking-wide">
            Starseeds
          </span>
        </div>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#ffffff] lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 mt-1.5">
          {/* <a href="#services" className="text-xl leading-6">
            Our Services
          </a>
          <a href="#security" className="text-xl leading-6">
            Security Services
          </a>
          <a href="#team" className="text-xl leading-6">
            Cryptech Team
          </a> */}

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl leading-6">
              {/* Projects
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              /> */}
              <div
                className="inline-flex items-center justify-center rounded-md p-2.5 text-[#ffffff]"
                // onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 top-full mt-3 w-screen max-w-md overflow-hidden rounded-lg  bg-[#111827] shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#0d111750]"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-bg-[#111827] group-hover:bg-[#111827]">
                        <item.icon
                          className="h-6 w-6 text-gray-500 group-hover:text-cyan-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-lg text-gray-100"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gradient-to-br from-cyan-500/25 to-emerald-600/25">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-100 hover:bg-[#111827]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div> */}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="contained"
            className="rounded-full capitalize w-40 bg-[#bd03e4]"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="relative z-30 lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#111827] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cryptech Services</span>
              <Image
                className="h-12 w-auto rounded-full"
                src="/images/metatron-logo.webp"
                alt=""
                width={256}
                height={256}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-100 hover:bg-[#0d111750]"
                >
                  Our Services
                </a>
                <a
                  href="#security"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-100 hover:bg-[#0d111750]"
                >
                  Security Services
                </a>
                <a
                  href="#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-100 hover:bg-[#0d111750]"
                >
                  Cryptech Team
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-gray-100 hover:bg-[#0d1117]">
                        Projects
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...projects, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Button
                  variant="contained"
                  className="bg-gradient-to-br from-cyan-500 to-emerald-600"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
