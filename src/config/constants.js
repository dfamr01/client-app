export const SCREEN_SIZES = {
  MOBILE: 560,
  TABLET: 850,
};

export const LIVE_REFUND_TIME = '2 hours';
export const PAID_EVENT_NO_UNREGISTER_TIME_MIN = 120; //in seconds the time before paid event start that we dont allow users to unregister
export const PAID_EVENT_NO_UNREGISTER_ERROR = `max time to refund event is ${LIVE_REFUND_TIME} before event is starting`;

export const FREE_EVENT_NO_UNREGISTER_TIME = 15 * 60; //in seconds the time before event start that we dont allow users to unregister
export const FREE_EVENT_NO_UNREGISTER_TIME_MIN = 15; //in minutes the time before event start that we dont allow users to unregister
export const FREE_EVENT_NO_UNREGISTER_ERROR =
  'max time to unregister to event is 15 minutes before the event is starting';

export const LIVE_EVENT_REFUND_NOTICE = `Refund policy: up to  ${LIVE_REFUND_TIME} before the events starts`;
export const VOD_REFUND_TIME = 'one week';
export const VOD_REFUND_NOTICE = 'Refund policy: no refunds';

export const WORKSHOP_REFUND_NOTICE = 'Refund policy: no refunds';
export const LIVE_WORKSHOP_REFUND_TIME = '2 hours';
export const VOD_WORKSHOP_REFUND_TIME = 'one week';
// export const LIVE_WORKSHOP_REFUND_NOTICE = 'Refund policy: up to ' + LIVE_WORKSHOP_REFUND_TIME + ' before the first live events starts';
export const WORKSHOP_EVENT_BUY_NOTICE =
  'for attending this workshop event you must purchase the workshop';
export const WORKSHOP_EVENT_FREE_NOTICE =
  'for attending this workshop event you must register to the workshop';

export const REPORT = 'Thanks for your report, we will address this ASAP';
export const PAYMENT_PROCESSING_MSG =
  'payment is being process \nwe will notify via email on completion';

export const COMPANY_ADDRESS =
  'Livly, Inc.\n' + '651 N Broad St\n' + 'Suite 206\n' + 'Middletown, DE 19709\n' + 'US';

export const DROPIN_NOT_ALLOWED = 'Sorry this event does not allows DropIn';
export const HOME_PAGE_CONTENT =
  'Enjoy live and VOD virtual events, workshops. learn, and interact with friends and people anywhere around the world on Blipy.tv';
export const FB_APP_ID = '675998546373241';

export const TWITTER_ID = 'Blipy3';
export const WEBSITE_NAME = 'livly.tv';
export const HOMEPAGE = 'https://livly.tv';
export const REFUND_EMAIL = 'refund@livly.tv';
export const PRIVACY_EMAIL = 'privacy@livly.tv';
export const SECURITY_EMAIL = 'security@livly.tv';
export const REPORT_EMAIL = 'report@livly.tv';
export const SUPPORT_EMAIL = 'support@livly.tv';
export const DMCA_EMAIL = 'dmca@livly.tv';
export const SUPPORT_LINK = 'https://livly.tv/support/en/';
export const USER_NAME_LINK = 'https://www.livly.tv/user-settings/profile';

const CONTACT_NUMBER = '972545923493';
export const WHATSAPP_CONTACT = `https://wa.me/${CONTACT_NUMBER}?text=`;

export const OFFSET_START_TIME = 10 * 60; //the time that considered now in seconds

// export const FREE_WORKSHOP_NO_UNREGISTER_TIME = 15 * 60; //in seconds the time before event start that we dont allow users to unregister

export const OFFSET_START_TIME_MIN = 10; //the time that minutes now in seconds

export const EVENT_DROPIN_GRACE_MIN = 5; //the time that considered now in minutes

export const PAGE_SIZE = 5;
export const PAGE_SIZE_BROWSE = 4;

export const TIME_INTERVALS = 10;
export const NO_TZ_TIMESTAMP_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

export const CLOUDINARY_HOST = 'https://res.cloudinary.com';

export const TEXT_LENGTH_LIMITATIONS = {
  EVENT_TITLE_MAX: 100,
  EVENT_DESCRIPTION_MAX: 5000,
  EVENT_SUMMERY_MAX: 150,
  WORKSHOP_TITLE_MAX: 100,
  WORKSHOP_DESCRIPTION_MAX: 5000,
  WORKSHOP_SUMMERY_MAX: 150,
};

export const DESCRIPTION_EXCERPT_LENGTH = 350;

export const USER_STATUS = {
  REGISTERED: { key: 'REGISTERED', value: 'Registered' },
  VERIFIED: { key: 'VERIFIED', value: 'Verified' },
  SUSPENDED: { key: 'SUSPENDED', value: 'Suspended' },
  DELETED: { key: 'DELETED', value: 'Deleted' },
};

export const USER_STRIPE_ACCOUNT_STATUS = {
  NONE: { key: 'NONE', value: 'None' },
  CREATED: { key: 'CREATED', value: 'Created' },
  PENDING: { key: 'PENDING', value: 'Pending' },
  VERIFIED: { key: 'VERIFIED', value: 'Verified' },
};

export const FEEDBACK_NAMES = {
  EMAIL_VERIFICATION: { key: 'EMAIL_VERIFICATION', value: 'Email Verification' },
};

export const ACCEPTED_IMAGES = 'image/*';
// export const ACCEPTED_IMAGES = '.jpg,.jpeg,.png,image/jpeg,image/png';

export const UPLOAD_VIDEO_CHUNK_SIZE = 0.5 * 1024 * 1024; //this is the minimum size required by aws s3

// Minimum 5MB per chunk (except the last part) http://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadComplete.html
export const AMAZON_MIN_S3_CHUNK_SIZE = 5 * 1024 * 1024; // 5mg

export const INCOMPLETE_EVENT_KEY = 'INCOMPLETE_EVENT';
export const INCOMPLETE_WORKSHOP_KEY = 'INCOMPLETE_WORKSHOP_KEY';
export const INCOMPLETE_WORKSHOP_EVENT_KEY = 'INCOMPLETE_WORKSHOP_EVENT_KEY';
export const AUTH_KEY = 'AUTH';
export const FILE_UPLOADER_KEY = 'FILE_UPLOADER';
export const ADD_TO_CALENDAR_POPUP_NOTICE_FLAG = 'AddToCalendarPopUpNoticeDisabled';

// export const EDIT_GRACE_PERIOD = 2 * 24 * 60 * 60; // 2 days

export const UNLIMITED_SIZE = 1000000;
export const MAX_STREAM_DURATION = 7 * 24 * 60 * 60; // 7 days
export const MAX_STREAM_DURATION_TEXT = '7 days'; // 7 days
export const UNLIMITED_DURATION_DAYS = 1;
export const VOD_END_TIME = 3 * 60; // this is the time we considered the viewer watch the all vod

export const UPLOAD_STATUS = {
  UPLOADING: { key: 'UPLOADING', value: 'Uploading' },
  PAUSED: { key: 'PAUSED', value: 'PAUSED' },
  ERROR: { key: 'ERROR', value: 'Error' },
  SUCCESS: { key: 'SUCCESS', value: 'Success' },
};

export const UPLOAD_TYPE = {
  CHUNKED: { key: 'CHUNKED', value: 'Chunked' },
  NORMAL: { key: 'NORMAL', value: 'Normal' },
};

export const EVENT_STATUS = {
  STARTED: { key: 'STARTED', value: 'Started' },
  COMPLETED: { key: 'COMPLETED', value: 'Completed' },
  PUBLISHED: { key: 'PUBLISHED', value: 'Published' },
  DELETED: { key: 'DELETED', value: 'Deleted' },
};

export const EVENT_RECORD_DURATIONS = {
  MEMBERSHIP_FREE: { key: '24', value: '24H' },
  MEMBERSHIP_GOLD: { key: '48', value: '48H' },
  MEMBERSHIP_PREMIUM: { key: '72', value: '72H' },
  MEMBERSHIP_ENTERPRISE: { key: '0', value: 'Unlimited' },
};

export const WORKSHOP_STATUS = {
  STARTED: { key: 'STARTED', value: 'Started' },
  COMPLETED: { key: 'COMPLETED', value: 'Completed' },
  PUBLISHED: { key: 'PUBLISHED', value: 'Published' },
  DELETED: { key: 'DELETED', value: 'Deleted' },
};

export const EMBEDDED_TYPES = {
  UNKNOWN: { key: 'UNKNOWN', value: 'Unknown' },
  BLIPY: { key: 'BLIPY', value: 'Blipy' },
  ZOOM: { key: 'ZOOM', value: 'Zoom' },
  // GM: {key: 'GM', value: 'Google Meet'},
  // MT: {key: 'MT', value: 'Microsoft Teams'},
  FL: { key: 'FL', value: 'Facebook Live' },
  YL: { key: 'YL', value: 'YouTube Live' },
};

export const PAYMENT_TYPES = {
  FREE: { key: 'FREE', value: 'Free' },
  PAID: { key: 'PAID', value: 'Paid' },
  // CHARITY: {key: 'CHARITY', value: 'Charity'}
};

export const PAYOUT_STATUS = {
  IDLE: { key: 'IDLE', value: 'Idle' },
  REQUESTED: { key: 'REQUESTED', value: 'Requested' },
  FULFILLED: { key: 'FULFILLED', value: 'fulfilled' },
  FAILED: { key: 'FAILED', value: 'Failed' },
};

export const USER_TRANSACTION_STATUS = {
  PENDING: { key: 'PENDING', value: 'Pending' },
  PAYOUT_GENERATED: { key: 'PAYOUT_GENERATED', value: 'Payout generated' },
  PAYOUT_NOT_GENERATED: { key: 'PAYOUT_NOT_GENERATED', value: 'Payout not Generated' },
  PAID: { key: 'PAID', value: 'Paid' },
  FAILED: { key: 'FAILED', value: 'Failed' },
};

export const TRANSACTION_STATUS = {
  STARTED: { key: 'STARTED', value: 'Started' },
  POLLING: { key: 'POLLING', value: 'Polling' },
  SUCCEEDED: { key: 'SUCCEEDED', value: 'Succeeded' },
  FULFILLED: { key: 'FULFILLED', value: 'fulfilled' },
  REFUND_STARTED: { key: 'REFUND_STARTED', value: 'Refund Started' },
  REFUNDED: { key: 'REFUNDED', value: 'Refunded' },
  FAILED: { key: 'FAILED', value: 'Failed' },
};

export const EVENT_SIZE_LIMITATIONS = {
  MEMBERSHIP_FREE: {
    key: 'MEMBERSHIP_FREE',
    value: 'Free',
    duration: { min: 0, max: UNLIMITED_SIZE },
    participantsLimit: { min: 0, max: UNLIMITED_SIZE },
    recordDuration: '24',
    price: 0,
  },
  MEMBERSHIP_GOLD: {
    key: 'MEMBERSHIP_GOLD',
    value: 'Gold',
    duration: { min: 30, max: 60 },
    participantsLimit: { min: 15, max: 30 },
    recordDuration: '48',
    price: 4000,
  },
  MEMBERSHIP_PREMIUM: {
    key: 'MEMBERSHIP_PREMIUM',
    value: 'Premium',
    duration: { min: 60, max: 240 },
    participantsLimit: { min: 30, max: 60 },
    recordDuration: '72',
    price: 8000,
  },
  MEMBERSHIP_ENTERPRISE: {
    key: 'MEMBERSHIP_ENTERPRISE',
    value: 'Enterprise',
    duration: { min: 240, max: UNLIMITED_SIZE },
    participantsLimit: { min: 60, max: UNLIMITED_SIZE },
    recordDuration: '0',
    price: 16000,
  },
};

export const WORKSHOP_SIZE_LIMITATIONS = {
  MEMBERSHIP_FREE: {
    key: 'MEMBERSHIP_FREE',
    value: 'Free',
    duration: { min: 0, max: UNLIMITED_SIZE },
    participantsLimit: { min: 0, max: UNLIMITED_SIZE },
    recordDuration: '24',
    price: 0,
  },
  MEMBERSHIP_GOLD: {
    key: 'MEMBERSHIP_GOLD',
    value: 'Gold',
    duration: { min: 30, max: 60 },
    participantsLimit: { min: 15, max: 30 },
    recordDuration: '48',
    price: 4000,
  },
  MEMBERSHIP_PREMIUM: {
    key: 'MEMBERSHIP_PREMIUM',
    value: 'Premium',
    duration: { min: 60, max: 240 },
    participantsLimit: { min: 30, max: 60 },
    recordDuration: '72',
    price: 8000,
  },
  MEMBERSHIP_ENTERPRISE: {
    key: 'MEMBERSHIP_ENTERPRISE',
    value: 'Enterprise',
    duration: { min: 240, max: UNLIMITED_SIZE },
    participantsLimit: { min: 60, max: UNLIMITED_SIZE },
    recordDuration: '0',
    price: 16000,
  },
};

export const PERMISSIONS_ACTIONS = {
  ALLOW: { key: 'ALLOW', value: 'Allow' },
  DISALLOW: { key: 'DISALLOW', value: 'Disallow' },
};

export const PERMISSIONS = {
  subscription: {
    MEMBERSHIP_FREE: 'MEMBERSHIP_FREE',
    MEMBERSHIP_GOLD: 'MEMBERSHIP_GOLD',
    MEMBERSHIP_PREMIUM: 'MEMBERSHIP_PREMIUM',
    MEMBERSHIP_ENTERPRISE: 'MEMBERSHIP_ENTERPRISE',
  },
  containers: {
    VIEW_PRIVATE_CONTENT: 'VIEW_PRIVATE_CONTENT',
    VIEW_CONTENT: 'VIEW_CONTENT',
    CREATE_CONTENT: 'CREATE_CONTENT',
    EDIT_CONTENT: 'EDIT_CONTENT',
    DELETE_CONTENT: 'DELETE_CONTENT',
  },
  events: {
    VIEW_EVENT: 'VIEW_EVENT',
    VIEW_PRIVATE_EVENT: 'VIEW_PRIVATE_EVENT',
    VIEW_EVENT_OCCURRENCE: 'VIEW_EVENT_OCCURRENCE',
    CREATE_EVENT: 'CREATE_EVENT',
    EDIT_EVENT: 'EDIT_EVENT',
    DELETE_EVENT: 'DELETE_EVENT',
  },
  interactiveEvents: {
    VIEW_MEMBERS: 'VIEW_MEMBERS',
    INVITE_MEMBERS: 'INVITE_MEMBERS',
    REMOVE_MEMBERS: 'REMOVE_MEMBERS',
    BAN_MEMBERS: 'BAN_MEMBERS',

    STREAM_AUDIO: 'STREAM_AUDIO',
    STREAM_VIDEO: 'STREAM_VIDEO',

    MUTE_AUDIO: 'MUTE_AUDIO',
    MUTE_VIDEO: 'MUTE_VIDEO',

    CREATE_MESSAGE: 'CREATE_COMMENTS',
    VIEW_MESSAGE: 'VIEW_COMMENTS',
    EDIT_MESSAGE: 'EDIT_COMMENTS',
    DELETE_MESSAGE: 'DELETE_COMMENTS',
  },
  comments: {
    CREATE_COMMENTS: 'CREATE_COMMENTS',
    EDIT_COMMENTS: 'EDIT_COMMENTS',
    DELETE_COMMENTS: 'DELETE_COMMENTS',
  },
  security: {
    CHANGE_USER_ROLES: 'CHANGE_USER_ROLES',
    CHANGE_USER_PERMISSIONS: 'CHANGE_USER_PERMISSIONS',
    SECURITY_RANK_10: 'SECURITY_RANK_10', // admin
    SECURITY_RANK_30: 'SECURITY_RANK_30', // admin 30
    SECURITY_RANK_50: 'SECURITY_RANK_50', // admin 50
    SECURITY_RANK_70: 'SECURITY_RANK_70', // admin 70
    SECURITY_RANK_90: 'SECURITY_RANK_90', // admin 90
  },
  shared: {},
  payouts: {
    VIEW_PAYOUTS: 'VIEW_PAYOUTS',
    START_TRANSFER: 'START_TRANSFER',
  },
};

export const WORKSHOP_TYPE_SELECTOR = {
  none: 0,
  live: 1,
  vod: 2,
  mix: 3,
};

export const WORKSHOP_TYPE = {
  [WORKSHOP_TYPE_SELECTOR.none]: '',
  [WORKSHOP_TYPE_SELECTOR.live]: 'LIVE',
  [WORKSHOP_TYPE_SELECTOR.vod]: 'VOD',
  [WORKSHOP_TYPE_SELECTOR.mix]: 'LIVE & VOD',
};

export const CHANNEL_AVATAR_DIM = 200;

export const COLOR_ARRAY = [
  'gray',
  'red',
  'green',
  'blue',
  'pink',
  'black',
  'gold',
  'aquamarine',
  'bisque',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'crimson',
  'darkorchid',
  'darkgray',
  'DarkMagenta',
  'DarkGreen',
  'DarkOrange',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DodgerBlue',
  'FireBrick',
  'ForestGreen',
  'Fuchsia',
  'GoldenRod',
  'IndianRed',
  'Indigo',
  'LightCoral',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'Maroon',
  'MidnightBlue',
  'PaleVioletRed',
  'PowderBlue',
  'Turquoise',
];

export const PROCESSING_FEE = 16.5;
export const CREATOR_PAYMENT_PROCESS_DURATION = '14 days';

export const VIEW_MINIMUM_WATCH_DURATION = 30; //the seconds user need to watch to consider as a view

export const CONTENT_CATEGORY_TYPE = {
  new: 'new',
  suggestion1: 'suggestion1',
  suggestion2: 'suggestion2',
};

export const HOME_DEFAULT_CATEGORIES = {
  live: {
    new: {
      categoryType: CONTENT_CATEGORY_TYPE.new,
      search: { category: { label: 'New', value: 'all' } },
    },
    suggestion1: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion1,
      search: { category: { label: 'Health & Fitness', value: 'health-n-fitness' } },
    },
    suggestion2: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion2,
      search: { category: { label: 'Films & Media', value: 'films-n-media' } },
    },
  },
  vod: {
    new: {
      categoryType: CONTENT_CATEGORY_TYPE.new,
      search: { category: { label: 'New', value: 'all' } },
    },
    suggestion1: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion1,
      search: { category: { label: 'Business', value: 'business' } },
    },
    suggestion2: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion2,
      search: { category: { label: 'Development', value: 'development' } },
    },
  },
  series: {
    new: {
      categoryType: CONTENT_CATEGORY_TYPE.new,
      search: { category: { label: 'New', value: 'all' } },
    },
    suggestion1: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion1,
      search: { category: { label: 'Health & Fitness', value: 'health-n-fitness' } },
    },
    suggestion2: {
      categoryType: CONTENT_CATEGORY_TYPE.suggestion2,
      search: { category: { label: 'Personal Development', value: 'personal-development' } },
    },
  },
};

export const CHAT_MESSAGE_MAX_INPUT = 500;

export const TIME_UNIT = {
  s: { key: 's', label: 'Sec', unit: 1 },
  m: { key: 'm', label: 'Min', unit: 60 },
  h: { key: 'h', label: 'Hr', unit: 3600 },
};
