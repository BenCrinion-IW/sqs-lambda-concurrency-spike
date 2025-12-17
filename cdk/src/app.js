/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

"use strict";

// The Lambda handler
exports.handler = async (event) => {
  if (event.Records[0].body === "throw") {
    throw new Error("Error");
  }
  console.log(
    JSON.stringify(
      {
        count: event.Records.length,
        body: event.Records[0].body,
        messageId: event.Records[0].messageId,
        receiveCount: event.Records[0].attributes.ApproximateReceiveCount,
      },
      2,
      null
    )
  );

  const snooze = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await snooze(10_000);
  console.log("Success")
};
