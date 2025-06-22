import * as React from "react";
import type { Viewport } from "next";

import "@/styles/global.css";
import { UserProvider } from "@/contexts/user-context";
import { LocalizationProvider } from "@/components/core/localization-provider";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import { QueryProvider } from "@/contexts/query-context";

export const viewport = { width: "device-width", initialScale: 1 } satisfies Viewport;

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
	return (
		<html lang="en">
			<body>
				<LocalizationProvider>
					<QueryProvider>
						<UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
						</UserProvider>
					</QueryProvider>
				</LocalizationProvider>
			</body>
		</html>
	);
}
