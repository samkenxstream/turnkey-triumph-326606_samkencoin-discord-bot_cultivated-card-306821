// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Json_Decode$JsonCombinators from '@glennsl/rescript-json-combinators/src/Json_Decode.mjs'

function contextId(field) {
  return {
    unique: field.required('unique', Json_Decode$JsonCombinators.bool),
    app: field.required('app', Json_Decode$JsonCombinators.string),
    context: field.required('context', Json_Decode$JsonCombinators.string),
    contextIds: field.required(
      'contextIds',
      Json_Decode$JsonCombinators.array(Json_Decode$JsonCombinators.string),
    ),
    timestamp: field.required('timestamp', Json_Decode$JsonCombinators.$$int),
  }
}

function data(field) {
  var __x = Json_Decode$JsonCombinators.object(contextId)
  return {
    data: field.required('data', __x),
  }
}

var data$1 = Json_Decode$JsonCombinators.object(data)

var ContextId = {
  contextId: contextId,
  data: data$1,
}

function data$2(field) {
  return {
    error: field.required('error', Json_Decode$JsonCombinators.bool),
    errorNum: field.required('errorNum', Json_Decode$JsonCombinators.$$int),
    errorMessage: field.required(
      'errorMessage',
      Json_Decode$JsonCombinators.string,
    ),
    code: field.required('code', Json_Decode$JsonCombinators.$$int),
  }
}

var data$3 = Json_Decode$JsonCombinators.object(data$2)

var $$Error = {
  data: data$3,
}

function sponsor(field) {
  return {
    hash: field.required('hash', Json_Decode$JsonCombinators.string),
  }
}

var sponsor$1 = Json_Decode$JsonCombinators.object(sponsor)

function sponsorship(field) {
  return {
    app: field.required('app', Json_Decode$JsonCombinators.string),
    appHasAuthorized: field.required(
      'appHasAuthorized',
      Json_Decode$JsonCombinators.bool,
    ),
    spendRequested: field.required(
      'spendRequested',
      Json_Decode$JsonCombinators.bool,
    ),
    timestamp: field.required('timestamp', Json_Decode$JsonCombinators.$$float),
  }
}

function data$4(field) {
  var __x = Json_Decode$JsonCombinators.object(sponsorship)
  return {
    data: field.required('data', __x),
  }
}

var data$5 = Json_Decode$JsonCombinators.object(data$4)

var Sponsorships = {
  availableSponsorships: Json_Decode$JsonCombinators.$$int,
  sponsor: sponsor$1,
  sponsorship: sponsorship,
  data: data$5,
}

function result(field) {
  return {
    message: field.required('message', Json_Decode$JsonCombinators.string),
    errorNum: field.required('errorNum', Json_Decode$JsonCombinators.$$int),
  }
}

var result$1 = Json_Decode$JsonCombinators.object(result)

function operation(field) {
  return {
    state: field.required('state', Json_Decode$JsonCombinators.string),
    result: field.optional('result', result$1),
  }
}

function data$6(field) {
  var __x = Json_Decode$JsonCombinators.object(operation)
  return {
    data: field.required('data', __x),
  }
}

var data$7 = Json_Decode$JsonCombinators.object(data$6)

var Operations = {
  result: result$1,
  operation: operation,
  data: data$7,
}

function app(field) {
  return {
    id: field.required('id', Json_Decode$JsonCombinators.string),
    name: field.required('name', Json_Decode$JsonCombinators.string),
    context: field.required('context', Json_Decode$JsonCombinators.string),
    verification: field.required(
      'verification',
      Json_Decode$JsonCombinators.string,
    ),
    logo: field.required('logo', Json_Decode$JsonCombinators.string),
    url: field.required('url', Json_Decode$JsonCombinators.string),
    assignedSponsorships: field.required(
      'assignedSponsorships',
      Json_Decode$JsonCombinators.$$float,
    ),
    unusedSponsorships: field.required(
      'unusedSponsorships',
      Json_Decode$JsonCombinators.$$float,
    ),
    testing: field.required('testing', Json_Decode$JsonCombinators.bool),
    soulbound: field.required('soulbound', Json_Decode$JsonCombinators.bool),
    soulboundMessage: field.required(
      'soulboundMessage',
      Json_Decode$JsonCombinators.string,
    ),
  }
}

function data$8(field) {
  var __x = Json_Decode$JsonCombinators.object(app)
  return {
    data: field.required('data', __x),
  }
}

var data$9 = Json_Decode$JsonCombinators.object(data$8)

var App = {
  app: app,
  data: data$9,
}

var Decode_BrightId = {
  ContextId: ContextId,
  $$Error: $$Error,
  Sponsorships: Sponsorships,
  Operations: Operations,
  App: App,
}

var brightIdGuild = Json_Decode$JsonCombinators.object(function (field) {
  return {
    role: field.optional('role', Json_Decode$JsonCombinators.string),
    name: field.optional('name', Json_Decode$JsonCombinators.string),
    inviteLink: field.optional(
      'inviteLink',
      Json_Decode$JsonCombinators.string,
    ),
    roleId: field.optional('roleId', Json_Decode$JsonCombinators.string),
    sponsorshipAddress: field.optional(
      'sponsorshipAddress',
      Json_Decode$JsonCombinators.string,
    ),
    usedSponsorships: field.optional(
      'usedSponsorships',
      Json_Decode$JsonCombinators.string,
    ),
    assignedSponsorships: field.optional(
      'assignedSponsorships',
      Json_Decode$JsonCombinators.string,
    ),
    premiumSponsorshipsUsed: field.optional(
      'premiumSponsorshipsUsed',
      Json_Decode$JsonCombinators.string,
    ),
    premiumExpirationTimestamp: field.optional(
      'premiumExpirationTimestamp',
      Json_Decode$JsonCombinators.$$float,
    ),
  }
})

var brightIdGuilds = Json_Decode$JsonCombinators.dict(brightIdGuild)

var Decode_Gist = {
  brightIdGuild: brightIdGuild,
  brightIdGuilds: brightIdGuilds,
}

export { Decode_BrightId, Decode_Gist }
/* data Not a pure module */

import * as Json_Decode$JsonCombinators from '@glennsl/rescript-json-combinators/src/Json_Decode.mjs'

function contextId(field) {
  return {
    unique: field.required('unique', Json_Decode$JsonCombinators.bool),
    app: field.required('app', Json_Decode$JsonCombinators.string),
    context: field.required('context', Json_Decode$JsonCombinators.string),
    contextIds: field.required(
      'contextIds',
      Json_Decode$JsonCombinators.array(Json_Decode$JsonCombinators.string),
    ),
    timestamp: field.required('timestamp', Json_Decode$JsonCombinators.$$int),
  }
}

function data(field) {
  var __x = Json_Decode$JsonCombinators.object(contextId)
  return {
    data: field.required('data', __x),
  }
}

var data$1 = Json_Decode$JsonCombinators.object(data)

var ContextId = {
  contextId: contextId,
  data: data$1,
}

function data$2(field) {
  return {
    error: field.required('error', Json_Decode$JsonCombinators.bool),
    errorNum: field.required('errorNum', Json_Decode$JsonCombinators.$$int),
    errorMessage: field.required(
      'errorMessage',
      Json_Decode$JsonCombinators.string,
    ),
    code: field.required('code', Json_Decode$JsonCombinators.$$int),
  }
}

var data$3 = Json_Decode$JsonCombinators.object(data$2)

var $$Error = {
  data: data$3,
}

function sponsor(field) {
  return {
    hash: field.required('hash', Json_Decode$JsonCombinators.string),
  }
}

var sponsor$1 = Json_Decode$JsonCombinators.object(sponsor)

function sponsorship(field) {
  return {
    app: field.required('app', Json_Decode$JsonCombinators.string),
    appHasAuthorized: field.required(
      'appHasAuthorized',
      Json_Decode$JsonCombinators.bool,
    ),
    spendRequested: field.required(
      'spendRequested',
      Json_Decode$JsonCombinators.bool,
    ),
    timestamp: field.required('timestamp', Json_Decode$JsonCombinators.$$float),
  }
}

function data$4(field) {
  var __x = Json_Decode$JsonCombinators.object(sponsorship)
  return {
    data: field.required('data', __x),
  }
}

var data$5 = Json_Decode$JsonCombinators.object(data$4)

var Sponsorships = {
  availableSponsorships: Json_Decode$JsonCombinators.$$int,
  sponsor: sponsor$1,
  sponsorship: sponsorship,
  data: data$5,
}

function result(field) {
  return {
    message: field.required('message', Json_Decode$JsonCombinators.string),
    errorNum: field.required('errorNum', Json_Decode$JsonCombinators.$$int),
  }
}

var result$1 = Json_Decode$JsonCombinators.object(result)

function operation(field) {
  return {
    state: field.required('state', Json_Decode$JsonCombinators.string),
    result: field.optional('result', result$1),
  }
}

function data$6(field) {
  var __x = Json_Decode$JsonCombinators.object(operation)
  return {
    data: field.required('data', __x),
  }
}

var data$7 = Json_Decode$JsonCombinators.object(data$6)

var Operations = {
  result: result$1,
  operation: operation,
  data: data$7,
}

var Decode_BrightId = {
  ContextId: ContextId,
  $$Error: $$Error,
  Sponsorships: Sponsorships,
  Operations: Operations,
}

var brightIdGuild = Json_Decode$JsonCombinators.object(function (field) {
  return {
    role: field.optional('role', Json_Decode$JsonCombinators.string),
    name: field.optional('name', Json_Decode$JsonCombinators.string),
    inviteLink: field.optional(
      'inviteLink',
      Json_Decode$JsonCombinators.string,
    ),
    roleId: field.optional('roleId', Json_Decode$JsonCombinators.string),
    sponsorshipAddress: field.optional(
      'sponsorshipAddress',
      Json_Decode$JsonCombinators.string,
    ),
    usedSponsorships: field.optional(
      'usedSponsorships',
      Json_Decode$JsonCombinators.string,
    ),
    assignedSponsorships: field.optional(
      'assignedSponsorships',
      Json_Decode$JsonCombinators.string,
    ),
  }
})

var brightIdGuilds = Json_Decode$JsonCombinators.dict(brightIdGuild)

var Decode_Gist = {
  brightIdGuild: brightIdGuild,
  brightIdGuilds: brightIdGuilds,
}

export { Decode_BrightId, Decode_Gist }
/* data Not a pure module */