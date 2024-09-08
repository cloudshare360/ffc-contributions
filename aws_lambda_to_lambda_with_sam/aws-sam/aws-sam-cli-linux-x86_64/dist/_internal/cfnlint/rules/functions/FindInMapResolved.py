"""
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
"""

from cfnlint.rules import CloudFormationLintRule


class FindInMapResolved(CloudFormationLintRule):
    id = "W1034"
    shortdesc = "Validate the values that come from a Fn::FindInMap function"
    description = (
        "Resolve the Fn::FindInMap and then validate the values against the schema"
    )
    source_url = "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-findinmap.html"
    tags = ["functions", "findinmap"]
