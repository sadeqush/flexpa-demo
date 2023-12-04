import { FlexpaLinkButton } from "../components/flexpalink.button";

declare const FlexpaLink: {
  create: (config: any) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

function connectButtonOnClickListener() {
  FlexpaLink.open();
}

export const AuthorizePatientPage = () => {
  FlexpaLink.create({
    publishableKey: "import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY",
    onSuccess: async (publicToken: string) => {
      //Call backend API with publicToken
    },
  });

  return (
    <div onClick={() => connectButtonOnClickListener()}>
      <FlexpaLinkButton />
    </div>
  );
};
