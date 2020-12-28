import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import "../styles/EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

export default function EmailRow({
  title,
  subject,
  description,
  time,
  id,
  to,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, description, subject, time }));
    history.push("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{to}</h3>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description">{description}</span>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}
