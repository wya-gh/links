import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { PhotoIcon, UserGroupIcon, DevicePhoneMobileIcon, GlobeEuropeAfricaIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'


const links = [
  { name: 'Discord', icon: UserGroupIcon, description: "engage with the community", shortcut: 'N', url: 'https://discord.gg/F876RYCBmE' },
  { name: 'Instagram', icon: PhotoIcon, description: "checkout our pics", shortcut: 'F', url: 'https://instagram.com/wya' },
  { name: 'Website', icon: GlobeEuropeAfricaIcon, description: "find more details on the website", shortcut: 'H', url: 'https://wya.world' },
  { name: 'App', icon: DevicePhoneMobileIcon, description: "download the app", shortcut: 'L', url: 'https://downloadapp.wya.world' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredLinks =
    query === ''
      ? []
      : links.filter((link) => {
        return link.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <>
      <div
        className='w-screen h-screen absolute top-0'
        id='bg'
      >
        <Image src='/wya neon.png' width={200} height={100} alt="WYA Logo" />
      </div>
      <div className="mx-auto mt-32 px-2 max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
        <h1 className='text-2xl font-bold text-wyasilver-800 text-center py-4'>
          Important Links
        </h1>
        <Combobox onChange={(item: any) => (window.location = item.url)}>
          <div className="relative">
            <LinkIcon
              className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            <Combobox.Input
              className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:ring-0 sm:text-sm"
              placeholder="Search the WYA links..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {(query === '' || filteredLinks.length > 0) && (
            <Combobox.Options
              static
              className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
            >
              {filteredLinks.length > 0 && (
                <li className="p-2">
                  <h2 className="sr-only">Quick links</h2>
                  <ul className="text-sm text-gray-400">
                    {filteredLinks.map((link) => (
                      <Combobox.Option
                        key={link.shortcut}
                        value={link}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-pointer select-none items-center rounded-md px-3 py-2',
                            active && 'bg-gray-800 text-white'
                          )
                        }
                      >
                        {({ active }) => (
                          <Link className='flex w-full justify-between' href={link.url}>
                            <link.icon
                              className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-500')}
                              aria-hidden="true"
                            />
                            <span className="ml-3 flex-auto font-semibold truncate">{link.name}</span>
                            <span className="ml-3 flex-none text-xs  text-gray-400">
                              <kbd className="font-sans">{link.description}</kbd>
                            </span>
                          </Link>
                        )}
                      </Combobox.Option>
                    ))}
                  </ul>
                </li>
              )}
              {query === '' && (
                <li className="p-2">
                  <h2 className="sr-only">Quick actions</h2>
                  <ul className="text-sm text-gray-400">
                    {links.map((link) => (
                      <Combobox.Option
                        key={link.shortcut}
                        value={link}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-pointer select-none items-center rounded-md px-3 py-2',
                            active && 'bg-gray-800 text-white'
                          )
                        }
                      >
                        {({ active }) => (
                          <Link className='flex w-full justify-between' href={link.url}>
                            <link.icon
                              className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-500')}
                              aria-hidden="true"
                            />
                            <span className="ml-3 flex-auto font-semibold truncate">{link.name}</span>
                            <span className="ml-3 flex-none text-xs  text-gray-400">
                              <kbd className="font-sans">{link.description}</kbd>
                            </span>
                          </Link>
                        )}
                      </Combobox.Option>
                    ))}
                  </ul>
                </li>
              )}
            </Combobox.Options>
          )}

          {query !== '' && filteredLinks.length === 0 && (
            <div className="px-6 py-14 text-center sm:px-14">
              <LinkIcon className="mx-auto h-6 w-6 text-gray-500" aria-hidden="true" />
              <p className="mt-4 text-sm text-gray-200">
                We couldn't find any links with that term. Please try again.
              </p>
            </div>
          )}
        </Combobox>
      </div>
    </>
  )
}
