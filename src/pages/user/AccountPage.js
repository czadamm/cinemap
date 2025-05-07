import BgWrapper from "../../components/layout/BgWrapper";
import Title from "../../components/layout/Title";
import UserAvatar from "../../components/user/UserAvatar";
import classes from "./AccountPage.module.css";
import { useRef, useState } from "react";
import EditActions from "../../components/forms/EditActions";
import ProfileInput from "../../components/forms/ProfileInput";
import {useTranslation} from "react-i18next";

const AccountPage = () => {
  const filePickerRef = useRef();
  const [isInEdit, setIsInEdit] = useState(false);
  const { t } = useTranslation();

  const toggleFormEditMode = () => {
    setIsInEdit(!isInEdit);
  };

  const handleChangeAvatar = () => {
    filePickerRef.current.click();
  };

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>{t("accountTitle")}</Title>
        </div>
        <div className={classes.profile}>
          <div className={classes.left_side}>
            <div className={classes.avatar}>
              {isInEdit && (
                <button
                  onClick={handleChangeAvatar}
                  className={classes.avatar_change_button}
                >
                  {t("accountEditAvatar")}
                </button>
              )}
              <UserAvatar />
            </div>
          </div>
          <div className={classes.right_side}>
            <div className={classes.user_info}>
              <form action="" method="PATCH">
                <input
                  ref={filePickerRef}
                  hidden
                  type="file"
                  alt="select an image"
                />
                <ProfileInput
                  type="email"
                  value="Default name"
                  inEdit={isInEdit}
                >
                  {t("accountEmail")}
                </ProfileInput>
                <ProfileInput
                  type="password"
                  value="Default name"
                  inEdit={isInEdit}
                >
                  {t("accountPassword")}
                </ProfileInput>
                <ProfileInput
                  type="text"
                  value="Default name"
                  inEdit={isInEdit}
                >
                  {t("accountName")}
                </ProfileInput>
                <ProfileInput
                  type="text"
                  value="Default name"
                  inEdit={isInEdit}
                >
                  {t("accountBirthDate")}
                </ProfileInput>
                <EditActions isInEdit={isInEdit} editFn={toggleFormEditMode} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
