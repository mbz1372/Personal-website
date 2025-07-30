'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-lg',
        'border border-secondary-200 dark:border-secondary-700',
        'bg-white dark:bg-secondary-800',
        'text-secondary-900 dark:text-secondary-100',
        'transition-all duration-200 ease-in-out',
        'hover:bg-secondary-50 dark:hover:bg-secondary-700',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'dark:focus:ring-offset-secondary-800'
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
    </button>
  )
}