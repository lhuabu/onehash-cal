import { _generateMetadata } from "app/_utils";
import { getTranslate } from "app/_utils";

import AdminOrgTable from "@calcom/features/ee/organizations/pages/settings/admin/AdminOrgPage";
import LicenseRequired from "@calcom/features/oe/common/components/LicenseRequired";
import SettingsHeader from "@calcom/features/settings/appDir/SettingsHeader";

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("organizations"),
    (t) => t("orgs_page_description")
  );

const Page = async () => {
  const t = await getTranslate();
  return (
    <SettingsHeader title={t("organizations")} description={t("orgs_page_description")}>
      <LicenseRequired>
        <AdminOrgTable />
      </LicenseRequired>
    </SettingsHeader>
  );
};

export default Page;
