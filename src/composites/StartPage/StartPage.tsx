import { Button } from "../../components/Button/Button";
import { ImageGalleryWidget } from "../../components/ImageGalleryWidget/ImageGalleryWidget";
import { Page } from "../../components/Page/Page";
import { PageChild } from "../../components/Page/PageChild";
import { TweetLoader } from "../../components/Tweet/TweetLoader";
import { TweetNew } from "../../components/Tweet/TweetNew";
import { Widget } from "../../components/Widget/Widget";
import { DefaultProps } from "../../interfaces/DefaultProps";
import { IUser } from "../../interfaces/User";
import "./start-page.scss";

interface PageProps extends DefaultProps {
  user?: IUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const StartPage = ({ ...props }: PageProps) => {
  const leftPage = (
    <>
      <div>menuitem</div>
      <div>menuitem</div>
      <div>menuitem</div>
      <div>menuitem</div>
      <div>menuitem</div>
    </>
  );
  const middlePage = (
    <>
      <TweetNew />
      <TweetLoader />
    </>
  );

  const rightPage = (
    <>
      <Widget padded={true}>
        <div>New to Twitter?</div>
        <div>Sign up now to get your own personalized timeline!</div>
        <Button
          label={"button"}
          border={true}
          rounded={"xxlarge"}
          className={"w3-row w3-col"}
        />
        <Button
          label={"button"}
          border={true}
          rounded={"xxlarge"}
          className={"w3-row w3-col"}
        />
        <Button
          label={"button"}
          border={true}
          rounded={"xxlarge"}
          className={"w3-row w3-col"}
        />
        <div>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </div>
      </Widget>
      <ImageGalleryWidget />
      <Widget padded={true}>
        <div>You might like</div>
      </Widget>
      <Widget padded={true}>
        <div>Trends for you</div>
      </Widget>
    </>
  );
  return (
    <Page
      id={"landing"}
      groupName={"landing"}
      className={props.className + " w3-theme page"}
    >
      <PageChild
        id={"menu"}
        className={"w3-theme w3-container w3-border-right page-left"}
      >
        {leftPage}
      </PageChild>
      <PageChild id={"tweets"} className={"w3-theme page-middle"}>
        {middlePage}
      </PageChild>
      <PageChild
        id={"widgets"}
        className={"w3-theme w3-container w3-border-left page-right"}
      >
        {rightPage}
      </PageChild>
    </Page>
  );
};
