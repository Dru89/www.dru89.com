import { ClassNames } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

const ProfilePhoto = (): JSX.Element => {
  return (
    <ClassNames>
      {({ css }) => (
        <StaticImage
          css={{
            borderRadius: "50%",
            "& [data-placeholder-image]": { borderRadius: "50%" },
          }}
          imgClassName={css({
            borderRadius: "50%",
          })}
          src="../images/me.jpg"
          alt="Drew Hays"
          width={200}
          height={200}
        />
      )}
    </ClassNames>
  );
};

export default ProfilePhoto;
