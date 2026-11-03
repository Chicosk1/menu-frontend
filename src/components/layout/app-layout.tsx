import { Outlet } from 'react-router-dom'
import { Header } from './header'

export function AppLayout() {
  return (
    <>
      <Header />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-8 pr-6 sm:flex-row">
        <aside className="w-full shrink-0 sm:w-64">
        </aside>
        <main className="min-w-0 flex-1 pl-6 sm:pl-0">
          <Outlet />
        </main>
      </div>
    </>
  )
}