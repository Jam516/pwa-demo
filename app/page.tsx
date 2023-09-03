import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { DesktopBlocker } from "@/components/desktop-blocker"


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <DesktopBlocker />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          PWA Wallet Test
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Crypto Mobile App using Next.js
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={"https://www.0xtrends.com/"}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Connect
        </Link>
      </div>
    </section>
  )
}
