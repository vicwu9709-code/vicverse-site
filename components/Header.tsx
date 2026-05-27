import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
//import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import Image from './Image'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white/90 dark:bg-gray-950/90 justify-between py-7 backdrop-blur'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image src="/static/images/logo.png" alt="Vicverse" width={32} height={32} />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-black tracking-tight sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="m-1 text-sm font-bold text-gray-900 transition hover:text-orange-500 dark:text-gray-100 dark:hover:text-orange-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
