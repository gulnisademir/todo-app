import './globals.css'
// import {TodosProvider} from "@/store/todos";
import {TodosProvider} from "./components/context/todos/page";
export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

// thapa technical SUBSCRIBE

export default function RootLayout({
  children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <TodosProvider>
            {children}
        </TodosProvider>
        </body>
        </html>
    )
}






