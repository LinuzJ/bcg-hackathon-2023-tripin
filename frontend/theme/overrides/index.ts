import { ComponentOverride } from "./types";
import Accordion from "./Accordion";
import Alert from "./Alert";
import Autocomplete from "./Autocomplete";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Chip from "./Chip";
import Container from "./Container";
import ControlLabel from "./ControlLabel";
import CssBaseline from "./CssBaseline";
import Dialog from "./Dialog";
import Drawer from "./Drawer";
import Fab from "./Fab";
import Input from "./Input";
import Link from "./Link";
import Lists from "./Lists";
import LoadingButton from "./LoadingButton";
import Menu from "./Menu";
import Paper from "./Paper";
import Popover from "./Popover";
import Progress from "./Progress";
import Radio from "./Radio";
import Slider from "./Slider";
import Stepper from "./Stepper";
import SvgIcon from "./SvgIcon";
import Switch from "./Switch";
import Table from "./Table";
import Tabs from "./Tabs";
import ToggleButton from "./ToggleButton";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

const ComponentsOverrides: ComponentOverride = (theme) => {
  return {
    ...Link(theme),
    ...Badge(theme),
    ...Paper(theme),
    ...SvgIcon(theme),
    ...Container(theme),
    ...CssBaseline(theme),
    ...LoadingButton(theme),
    ...Fab(theme),
    ...Tabs(theme),
    ...Chip(theme),
    ...Card(theme),
    ...Menu(theme),
    ...Input(theme),
    ...Radio(theme),
    ...Lists(theme),
    ...Table(theme),
    ...Alert(theme),
    ...Switch(theme),
    ...Button(theme),
    ...Dialog(theme),
    ...Avatar(theme),
    ...Slider(theme),
    ...Drawer(theme),
    ...Stepper(theme),
    ...Tooltip(theme),
    ...Popover(theme),
    ...Checkbox(theme),
    ...Progress(theme),
    ...Accordion(theme),
    ...Typography(theme),
    ...ButtonGroup(theme),
    ...Autocomplete(theme),
    ...ControlLabel(theme),
    ...ToggleButton(theme),
  };
};

export default ComponentsOverrides;
