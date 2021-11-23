import { DefaultProps } from "../../interfaces/DefaultProps";
import { Widget } from "../Widget/Widget";
import "./image-gallery-widget.scss";

interface ImageGalleryWidgetProps extends DefaultProps {}

export const ImageGalleryWidget = ({ ...props }: ImageGalleryWidgetProps) => {
  let classNames = props.className ?? "";
  const groupName = props.groupName
    ? props.groupName + "-image-gallery-widget"
    : "image-gallery-widget";
  const id = props.id ? groupName + "-" + props.id : undefined;
  classNames += " image-gallery-widget";

  return (
    <Widget id={id} className={classNames}>
      <div
        className={"imgRow"}
        style={{
          marginBottom: "2px",
        }}
      >
        <img
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
        <img
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
        <img
          style={{ marginRight: "0px" }}
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
      </div>
      <div className={"imgRow"}>
        <img
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
        <img
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
        <img
          style={{ marginRight: "0px" }}
          src={
            "https://pbs.twimg.com/ext_tw_video_thumb/1462825487537950720/pu/img/gbSunuLD4gkmnaKX?format=jpg&name=120x120"
          }
          alt=""
        />
      </div>
    </Widget>
  );
};
