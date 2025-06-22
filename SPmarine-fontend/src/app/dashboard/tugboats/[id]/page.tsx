import type { JSX } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { TugboatDetailsForm } from "@/components/dashboard/tugboat/tugboat-details-form";

interface PageProps {
  params: { id: string };
}

// Generate static params for static export
export async function generateStaticParams() {
  // Return a list of tugboat IDs that should be statically generated
  // These IDs are based on the mock data in the application
  return [
    { id: 'tug-001' },
    { id: 'tug-002' },
    { id: 'tug-003' },
    { id: 'tug-004' },
    { id: 'tug-005' },
  ];
}

export default function Page({ params }: PageProps): JSX.Element {
  return (
    <Grid lg={8} md={6} xs={12}>
      <TugboatDetailsForm id={params.id} />
    </Grid>
  );
}