import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import classes from "./Info.module.scss";

const InfoDisplay = ({ icon, label, value }) => {
  return (
    <div className="col-md-3">
      <Card className="my-2">
        <CardContent>
          <div className="my-3">{icon}</div>
          <Typography variant="h5" component="h2">
            {value}
          </Typography>
          <Typography color="textSecondary">{label}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoDisplay;
