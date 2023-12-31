import CollapseContentBlock from "./CollapseContentBlock";
import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "collapse") return <CollapseContentBlock {...props} />;
  return null;
};

export default ContentBlock;
