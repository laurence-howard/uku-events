import * as R from 'ramda';

const detailsToVerify = [
  ['uku_event_contact', 'uku_event_contact_email'],
  ['uku_event_contact', 'uku_event_contact_name'],
  ['uku_event_contact', 'uku_event_contact_number_primary'],
  ['uku_event_price'],
  ['uku_event_location', 'uku_event_street_address'],
  ['uku_event_location', 'uku_event_city'],
  ['uku_event_location', 'uku_event_county'],
  ['uku_event_location', 'uku_event_post_code'],
]

const hasDetails = (event) => R.compose(
    R.all(
      R.isNil
    ),
    R.map((x) => R.pathOr(null, x, event)
  ))(detailsToVerify);

export {
  hasDetails
}