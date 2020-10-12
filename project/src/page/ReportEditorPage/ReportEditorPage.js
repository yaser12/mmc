// React built-in imports
import React from "react";

// Material UI imports
import { FormControl } from "@material-ui/core";

// Project related components
import ReportEditor from "../../components/ReportEditor/ReportEditor";

const ReportEditorPage = () => {
  return (
    <>
      <FormControl>
        <ReportEditor />
      </FormControl>
    </>
  );
};

export default ReportEditorPage;
