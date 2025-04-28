import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBadgeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_badge_items';
  info: {
    displayName: 'Badge Item';
    icon: 'alien';
  };
  attributes: {
    Alt: Schema.Attribute.String & Schema.Attribute.Required;
    Caption: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_to_actions';
  info: {
    description: '';
    displayName: 'Link Item';
    icon: 'emotionHappy';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Start Free Trial'>;
    URL: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://app.shorterloop.com/register'>;
    Variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost', 'none']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedContentGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_groups';
  info: {
    displayName: 'Content Group';
    icon: 'cloud';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    section: Schema.Attribute.Component<'shared.section-block', true>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'brush';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'bulletList';
  };
  attributes: {
    faqItems: Schema.Attribute.Component<'shared.faq-item', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    description: '';
    displayName: 'Feature Card';
    icon: 'apps';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'shared.call-to-action', true>;
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
    icon: 'discuss';
  };
  attributes: {
    bottomText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    description: Schema.Attribute.String;
    linkGroups: Schema.Attribute.Component<'shared.call-to-action', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialLinks: Schema.Attribute.Component<'shared.call-to-action', true>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'calendar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.call-to-action', true>;
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    menus: Schema.Attribute.Relation<'oneToOne', 'api::megamenu.megamenu'>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'bell';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.call-to-action', true>;
    headline: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    media: Schema.Attribute.Component<'shared.media', true>;
    subHeadline: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'bold';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedMenuSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_sections';
  info: {
    displayName: 'Menu Section';
    icon: 'car';
  };
  attributes: {
    link: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'shared.call-to-action', true>;
    sectionDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPricingCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_cards';
  info: {
    description: '';
    displayName: 'Pricing Cards';
    icon: 'crown';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    cta: Schema.Attribute.Component<'shared.call-to-action', true>;
    currency: Schema.Attribute.Enumeration<['USD', 'EURO', 'INR']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'USD'>;
    features: Schema.Attribute.Component<
      'shared.short-pricing-features',
      false
    >;
    mode: Schema.Attribute.Enumeration<['yearly', 'monthly']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'yearly'>;
    planName: Schema.Attribute.String & Schema.Attribute.Required;
    Summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_sections';
  info: {
    displayName: 'Pricing Section';
    icon: 'dashboard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.call-to-action', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    pricingCards: Schema.Attribute.Component<'shared.pricing-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuotation extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotations';
  info: {
    displayName: 'Quotation';
    icon: 'briefcase';
  };
  attributes: {
    Author: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files'>;
    Role: Schema.Attribute.String;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_blocks';
  info: {
    description: '';
    displayName: 'Section Block';
    icon: 'arrowLeft';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    Text: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'archive';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedShortPricingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_short_pricing_features';
  info: {
    description: '';
    displayName: 'Pricing Features';
    icon: 'crop';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.call-to-action', true>;
  };
}

export interface SharedTrustedByBadges extends Struct.ComponentSchema {
  collectionName: 'components_shared_trusted_by_badges';
  info: {
    description: '';
    displayName: 'Customer Recognition';
    icon: 'briefcase';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.badge-item', true>;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.badge-item': SharedBadgeItem;
      'shared.call-to-action': SharedCallToAction;
      'shared.content-group': SharedContentGroup;
      'shared.faq-item': SharedFaqItem;
      'shared.faq-section': SharedFaqSection;
      'shared.feature-card': SharedFeatureCard;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.menu-section': SharedMenuSection;
      'shared.pricing-cards': SharedPricingCards;
      'shared.pricing-section': SharedPricingSection;
      'shared.quotation': SharedQuotation;
      'shared.section-block': SharedSectionBlock;
      'shared.seo': SharedSeo;
      'shared.short-pricing-features': SharedShortPricingFeatures;
      'shared.trusted-by-badges': SharedTrustedByBadges;
    }
  }
}
