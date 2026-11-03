import logo from '@/assets/img/logo.svg'
import { SpotButton } from '@/cases/spots/components/spot-button'

export function Header() {
    return (
        <header className="bg-brand text-brand-foreground">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4">
                <img
                    src={logo}
                    alt="Mater Burger"
                    className="h-auto w-48 shrink-0"
                />
                <div className="flex items-center gap-4">
                    <SpotButton />
                </div>
            </div>
        </header>
    )
}