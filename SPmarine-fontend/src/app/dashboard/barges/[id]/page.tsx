import type { JSX } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { BargeDetailsForm } from "@/components/dashboard/barge/barge-details-form";

interface PageProps {
	params: { id: string };
}

// Generate static params for static export
export async function generateStaticParams() {
	// Return a list of barge IDs that should be statically generated
	// These IDs are based on the mock data in the application
	return [
		{ id: 'brg-001' },
		{ id: 'brg-002' },
		{ id: 'brg-003' },
		{ id: 'brg-004' },
		{ id: 'brg-005' },
		{ id: 'brg-006' },
		{ id: 'brg-007' },
		{ id: 'brg-008' },
		{ id: 'brg-009' },
	];
}

export default function Page({ params }: PageProps): JSX.Element {
	return (
		<Grid lg={8} md={6} xs={12}>
			<BargeDetailsForm id={params.id} />
		</Grid>
	);
}
