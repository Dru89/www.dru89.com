import { ClassNames } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface ProfilePhotoProps {
  className?: string;
}

function ProfilePhoto({ className }: ProfilePhotoProps): JSX.Element {
  return (
    <ClassNames>
      {({ css }) => (
        <StaticImage
          src="../images/me.png"
          alt="Drew Hays"
          width={600}
          height={600}
          quality={100}
          className={className}
          css={{
            borderRadius: "50%",
            "& [data-placeholder-image]": { borderRadius: "50%" },
            "@media screen and (max-width: 1199.95px)": {
              height: "100px",
              width: "100px",
            },
          }}
          imgClassName={css({
            borderRadius: "50%",
          })}
        />
      )}
    </ClassNames>
  );
}

export default ProfilePhoto;
