#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GitActionStack } from '../lib/git_action-stack';

const app = new cdk.App();

const testenv = {
  region: 'us-east-1',
  account: '683578897984',
};

new GitActionStack(app, 'GitActionStack', {
 
  
  env: testenv,

    //Adding another line to test the 
    //Another addition checking further
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});