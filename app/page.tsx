import { ThemeToggle } from "./_components/shared/theme-toggle";

export default function Home() {
	return (
		<div className="grid min-h-screen place-items-center font-[family-name:var(--font-geist-mono)]">
			<main className="flex flex-col m:items-start items-center">
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<h1 className="font-bold text-4xl">Barebones Starter</h1>
				</div>
			</main>
		</div>
	);
}
