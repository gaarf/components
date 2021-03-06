// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabSourcetree = props => <svg viewBox="0 0 406.2 512" {...props}><path d="M406.2 203c0-112.1-90.9-203-203-203C91.1-.2.2 90.6 0 202.6-.1 290.8 56.6 368.9 140.5 396v101.7c0 7.9 6.4 14.3 14.3 14.3h96.4c7.9 0 14.3-6.4 14.3-14.3V396.1c83.7-27 140.6-105 140.7-193.1zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z" /></svg>;

export const FabSourcetree = withStyle(SvgFabSourcetree, "FabSourcetree", false);