/* @ds-bundle: {"format":4,"namespace":"OgechiBrandonWeddingDesignSystem_218db6","components":[{"name":"DetailList","sourcePath":"components/content/DetailList.jsx"},{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"Hero","sourcePath":"components/content/Hero.jsx"},{"name":"PageHeader","sourcePath":"components/content/PageHeader.jsx"},{"name":"PhotoFrame","sourcePath":"components/content/PhotoFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"DateLocation","sourcePath":"components/typography/DateLocation.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionTitle","sourcePath":"components/typography/SectionTitle.jsx"}],"sourceHashes":{"components/content/DetailList.jsx":"dd179fcd7974","components/content/EventCard.jsx":"5d9c125b98f7","components/content/Hero.jsx":"21b93b2433a4","components/content/PageHeader.jsx":"0a6f9409663a","components/content/PhotoFrame.jsx":"54549773c1c6","components/core/Badge.jsx":"f022f25e688f","components/core/Button.jsx":"e5fe466237e3","components/core/Card.jsx":"7cfef733c22d","components/core/Divider.jsx":"61fd7c2d3d52","components/forms/Checkbox.jsx":"58ffb5b23631","components/forms/Field.jsx":"c334084e6404","components/forms/Input.jsx":"4ab27294b5de","components/forms/Radio.jsx":"7d8e7c395b08","components/forms/Select.jsx":"a3f7617fa605","components/forms/Textarea.jsx":"921a5c0c02de","components/navigation/Footer.jsx":"1aabb3b7d0e0","components/navigation/NavBar.jsx":"058ba64caa36","components/typography/DateLocation.jsx":"52650b06fb10","components/typography/Eyebrow.jsx":"a2f4c7854b8f","components/typography/SectionTitle.jsx":"a91733f7b52f","ui_kits/wedding-site/EventsScreen.jsx":"7bbbf5853d0d","ui_kits/wedding-site/HomeScreen.jsx":"fe07f84754cb","ui_kits/wedding-site/RegistryScreen.jsx":"ae15363b90b3","ui_kits/wedding-site/RsvpScreen.jsx":"801855d56968","ui_kits/wedding-site/Shell.jsx":"c53ddc4d1384","ui_kits/wedding-site/TravelScreen.jsx":"2c1b88d9fab0","ui_kits/wedding-site/data.js":"91b9f4f82ad0"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.OgechiBrandonWeddingDesignSystem_218db6 = window.OgechiBrandonWeddingDesignSystem_218db6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/DetailList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DetailList({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({}, rest, {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label || i,
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) 0',
      borderTop: i === 0 ? 'none' : 'var(--border-width) solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-body)',
      margin: 0
    }
  }, it.value))));
}
Object.assign(__ds_scope, { DetailList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DetailList.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EventCard({
  title,
  date,
  location,
  time,
  description,
  badge,
  action,
  index,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    style: {
      background: 'var(--color-bg-alt)',
      border: 'var(--border-width) solid var(--color-border)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), (index || badge) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, index), badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--color-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'normal',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'var(--text-accent)',
      color: 'var(--color-accent-date)',
      lineHeight: 1.35
    }
  }, [date, location].filter(Boolean).join(' \u00B7 ')), time && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-muted)'
    }
  }, time), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-body)',
      margin: 0
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  names = 'Ogechi & Brandon',
  date,
  location,
  kicker,
  action,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      textAlign: 'center',
      padding: 'var(--space-8) var(--space-5)',
      background: 'var(--color-bg)',
      ...style
    }
  }), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--color-heading)',
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 'normal',
      margin: 0
    }
  }, names), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '120px',
      height: 1,
      background: 'var(--color-accent-free)'
    }
  }), (date || location) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'calc(var(--text-accent) * 1.4)',
      color: 'var(--color-accent-date)',
      lineHeight: 1.3
    }
  }, [date, location].filter(Boolean).join(' \u00B7 ')), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, action), children);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hero.jsx", error: String((e && e.message) || e) }); }

// components/content/PageHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageHeader({
  eyebrow,
  title,
  date,
  location,
  intro,
  align = 'center',
  style,
  children,
  ...rest
}) {
  const items = align === 'center' ? 'center' : 'flex-start';
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: items,
      gap: 'var(--space-3)',
      textAlign: align,
      padding: 'var(--space-8) var(--space-5) var(--space-7)',
      borderBottom: 'var(--border-width) solid var(--color-border)',
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--color-heading)',
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 'normal',
      margin: 0
    }
  }, title), (date || location) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'var(--text-accent)',
      color: 'var(--color-accent-date)'
    }
  }, [date, location].filter(Boolean).join(' \u00B7 ')), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-body)',
      maxWidth: 'var(--measure)',
      margin: 'var(--space-2) 0 0'
    }
  }, intro), children);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoFrame({
  src,
  alt = '',
  caption,
  ratio = '3 / 4',
  label = 'Photograph',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      border: 'var(--border-width) solid var(--color-border)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      background: 'var(--color-bg-alt)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, label)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  style,
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--color-text-muted)',
      borderColor: 'var(--color-border)',
      background: 'transparent'
    },
    crimson: {
      color: 'var(--color-button-text)',
      borderColor: 'var(--color-button-bg)',
      background: 'var(--color-button-bg)'
    },
    stem: {
      color: 'var(--color-accent-date)',
      borderColor: 'var(--color-accent-date)',
      background: 'transparent'
    },
    coral: {
      color: 'var(--color-accent-free)',
      borderColor: 'var(--color-accent-free)',
      background: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '5px 10px',
      border: 'var(--border-width) solid',
      borderRadius: 'var(--radius)',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const base = {
  display: 'inline-block',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: 'var(--button-letter-spacing)',
  borderRadius: 'var(--radius)',
  boxShadow: 'var(--shadow)',
  borderStyle: 'solid',
  borderWidth: 'var(--button-border-width)',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
  lineHeight: 1.2
};
const sizes = {
  sm: {
    fontSize: 'var(--text-caption)',
    padding: '10px 20px'
  },
  md: {
    fontSize: 'var(--text-button)',
    padding: 'var(--button-padding-y) var(--button-padding-x)'
  },
  lg: {
    fontSize: 'var(--text-body-sm)',
    padding: '18px 40px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const on = hover && !disabled;
  const skins = {
    primary: {
      background: on ? 'var(--color-button-bg-hover)' : 'var(--color-button-bg)',
      color: 'var(--color-button-text)',
      borderColor: on ? 'var(--color-button-bg-hover)' : 'var(--color-button-bg)'
    },
    outline: {
      background: on ? 'var(--color-button-bg)' : 'transparent',
      color: on ? 'var(--color-button-text)' : 'var(--color-button-bg)',
      borderColor: 'var(--color-button-bg)'
    },
    quiet: {
      background: 'transparent',
      color: on ? 'var(--color-accent-free)' : 'var(--color-text-body)',
      borderColor: 'transparent',
      padding: '10px 0',
      textDecoration: 'none',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: on ? 'var(--color-accent-free)' : 'var(--color-border)'
    }
  };
  const css = {
    ...base,
    ...sizes[size],
    ...skins[variant],
    ...(fullWidth ? {
      display: 'block',
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    type: href ? undefined : type,
    href: href,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    disabled: !href && disabled ? true : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'alt',
  bordered = true,
  padding = 'var(--space-5)',
  style,
  children,
  ...rest
}) {
  const backgrounds = {
    alt: 'var(--color-bg-alt)',
    plain: 'var(--color-bg)',
    crimson: 'var(--color-button-bg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: backgrounds[tone],
      border: bordered ? `var(--border-width) solid ${tone === 'crimson' ? 'var(--color-button-bg)' : 'var(--color-border)'}` : 'none',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      padding,
      color: tone === 'crimson' ? 'var(--color-bg)' : 'var(--color-text-body)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = 'rule',
  space = 'var(--space-6)',
  label,
  style,
  ...rest
}) {
  if (variant === 'ornament' || label) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: `${space} 0`,
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--color-accent-free)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: label ? 'var(--font-accent)' : 'var(--font-body)',
        fontSize: label ? 'var(--text-accent)' : 'var(--text-caption)',
        color: label ? 'var(--color-accent-date)' : 'var(--color-accent-free)',
        lineHeight: 1
      }
    }, label || '\u2E3B'), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--color-accent-free)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 'none',
      borderTop: `var(--border-width) solid ${variant === 'hairline' ? 'var(--color-border)' : 'var(--color-accent-free)'}`,
      margin: `${space} 0`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      minHeight: '44px',
      padding: 'var(--space-2) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 3,
      border: `var(--border-width) solid ${checked ? 'var(--color-heading)' : 'var(--color-border)'}`,
      background: checked ? 'var(--color-heading)' : 'var(--color-bg)',
      borderRadius: 'var(--radius)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.2s ease, border-color 0.2s ease'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5L10 1.2",
    fill: "none",
    stroke: "var(--color-button-text)",
    strokeWidth: "1.6"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 300,
      color: 'var(--color-text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--color-text-body)',
      letterSpacing: '0.02em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-free)'
    }
  }, " *")), children, hint && !error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-text-muted)'
    }
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const controlStyle = (focus, invalid) => ({
  fontFamily: 'var(--font-body)',
  fontWeight: 300,
  fontSize: 'var(--text-body)',
  color: 'var(--color-text-body)',
  background: 'var(--color-bg)',
  border: `var(--border-width) solid ${invalid ? 'var(--color-error)' : focus ? 'var(--color-heading)' : 'var(--color-border)'}`,
  borderRadius: 'var(--radius)',
  boxShadow: 'var(--shadow)',
  padding: 'var(--space-2) var(--space-3)',
  outline: focus ? '2px solid var(--color-heading)' : 'none',
  outlineOffset: '1px',
  width: '100%',
  boxSizing: 'border-box'
});
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...controlStyle(focus, invalid),
      minHeight: '44px',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { controlStyle, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  name,
  value,
  label,
  description,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      minHeight: '44px',
      padding: 'var(--space-2) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 3,
      border: `var(--border-width) solid ${checked ? 'var(--color-heading)' : 'var(--color-border)'}`,
      background: 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color 0.2s ease'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--color-heading)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 300,
      color: 'var(--color-text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  options = [],
  placeholder,
  invalid = false,
  style,
  children,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...__ds_scope.controlStyle(focus, invalid),
      minHeight: '44px',
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg, transparent 50%, var(--color-heading) 50%), linear-gradient(135deg, var(--color-heading) 50%, transparent 50%)',
      backgroundPosition: 'calc(100% - 18px) 20px, calc(100% - 12px) 20px',
      backgroundSize: '6px 6px, 6px 6px',
      backgroundRepeat: 'no-repeat',
      paddingRight: 'var(--space-6)',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  invalid = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...__ds_scope.controlStyle(focus, invalid),
      resize: 'vertical',
      lineHeight: 'var(--leading-relaxed)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  names = 'Ogechi & Brandon',
  date,
  location,
  links = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      borderTop: 'var(--border-width) solid var(--color-border)',
      padding: 'var(--space-7) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textAlign: 'center',
      background: 'var(--color-bg)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '38px',
      color: 'var(--color-heading)',
      lineHeight: 1.2
    }
  }, names), (date || location) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'var(--text-accent)',
      color: 'var(--color-accent-date)'
    }
  }, [date, location].filter(Boolean).join(' \u00B7 ')), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 'var(--space-2)'
    }
  }, links.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof l === 'object' && l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-caption)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--color-text-muted)',
        textDecoration: 'none',
        borderBottom: 'none'
      }
    }, label);
  })));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'O & B',
  items = [],
  active,
  onNavigate,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--color-bg)',
      borderBottom: 'var(--border-width) solid var(--color-border)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      color: 'var(--color-heading)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, items.map(item => {
    const label = typeof item === 'string' ? item : item.label;
    const key = typeof item === 'string' ? item : item.id || item.label;
    const on = active === key;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: typeof item === 'object' && item.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(key);
        }
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: on ? 600 : 400,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: on ? 'var(--color-heading)' : 'var(--color-text-body)',
        textDecoration: 'none',
        paddingBottom: '4px',
        borderBottom: `1px solid ${on ? 'var(--color-accent-free)' : 'transparent'}`,
        whiteSpace: 'nowrap',
        cursor: 'pointer'
      }
    }, label);
  }), action));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/typography/DateLocation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DateLocation({
  date,
  location,
  separator = '\u00B7',
  size = 'var(--text-accent)',
  align = 'left',
  style,
  children,
  ...rest
}) {
  const text = children || [date, location].filter(Boolean).join(` ${separator} `);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--color-accent-date)',
      fontSize: size,
      letterSpacing: 0,
      lineHeight: 'var(--leading-normal)',
      textAlign: align,
      ...style
    }
  }), text);
}
Object.assign(__ds_scope, { DateLocation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/DateLocation.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  align = 'left',
  tone = 'muted',
  style,
  children,
  ...rest
}) {
  const colors = {
    muted: 'var(--color-text-muted)',
    body: 'var(--color-text-body)',
    coral: 'var(--color-accent-free)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: colors[tone],
      textAlign: align,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const levels = {
  hero: {
    tag: 'h1',
    size: 'var(--text-hero)'
  },
  page: {
    tag: 'h2',
    size: 'var(--text-h1)'
  },
  section: {
    tag: 'h3',
    size: 'var(--text-h2)'
  }
};
function SectionTitle({
  level = 'section',
  align = 'left',
  as,
  style,
  children,
  ...rest
}) {
  const cfg = levels[level];
  const Tag = as || cfg.tag;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--color-heading)',
      fontSize: cfg.size,
      lineHeight: 'var(--leading-tight)',
      fontWeight: 'normal',
      textAlign: align,
      margin: 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/EventsScreen.jsx
try { (() => {
const {
  PageHeader,
  EventCard,
  Badge,
  Button,
  DetailList,
  SectionTitle,
  Divider,
  Card
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function EventsScreen({
  setPage
}) {
  const d = window.OB_DATA;
  const [openId, setOpenId] = React.useState('white');
  const open = d.events.find(e => e.id === openId);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Nine days, two continents",
    title: "Events",
    date: "November 21 \u2013 29, 2026",
    intro: "Four gatherings. Times, dress and directions for each are below \u2014 pick one to see the details."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, d.events.map(e => /*#__PURE__*/React.createElement(EventCard, {
    key: e.id,
    index: e.index,
    title: e.title,
    date: e.date,
    location: e.location,
    time: e.time,
    description: e.description,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: e.id === openId ? 'crimson' : 'stem'
    }, e.dress),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setOpenId(e.id)
    }, e.id === openId ? 'Showing details' : 'Details'),
    style: {
      borderColor: e.id === openId ? 'var(--color-heading)' : 'var(--color-border)'
    }
  }))), /*#__PURE__*/React.createElement(Divider, {
    label: open.title.toLowerCase()
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    level: "page"
  }, open.title), /*#__PURE__*/React.createElement("div", {
    className: "date-location",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, open.date, " \xB7 ", open.location), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      lineHeight: 'var(--leading-relaxed)',
      marginTop: 'var(--space-3)'
    }
  }, open.description), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPage('rsvp'),
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "RSVP to this event")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(DetailList, {
    items: [{
      label: 'Schedule',
      value: open.time
    }, {
      label: 'Dress code',
      value: open.dress
    }, {
      label: 'Who\u2019s invited',
      value: open.access
    }, {
      label: 'Location',
      value: open.location
    }, {
      label: 'Questions',
      value: 'ogechiandbrandon@example.com'
    }]
  })))));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  EventCard,
  Badge,
  Divider,
  SectionTitle,
  PhotoFrame,
  Eyebrow
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function HomeScreen({
  setPage
}) {
  const d = window.OB_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    kicker: "We're getting married",
    names: d.couple,
    date: d.mainDate,
    location: d.mainPlace,
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setPage('rsvp')
    }, "RSVP by September 1"),
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-7)'
    }
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "3 / 4",
    caption: "Owerri, 2024"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "3 / 4",
    caption: "Hawthorne, 2025"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "3 / 4",
    caption: "The proposal"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-width) solid var(--color-border)',
      background: 'var(--color-bg-alt)'
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The short version"), /*#__PURE__*/React.createElement(SectionTitle, {
    level: "page",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Four celebrations")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 'var(--measure)'
    }
  }, "We are marrying twice on two continents, which means four gatherings across nine days. Come to all of them, or to the one you can reach. Each event has its own page with times, dress and directions.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, d.events.map(e => /*#__PURE__*/React.createElement(EventCard, {
    key: e.id,
    index: e.index,
    title: e.title,
    date: e.date,
    location: e.location,
    time: e.time,
    description: e.description,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "stem"
    }, e.dress),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setPage('events')
    }, "Details"),
    style: {
      background: 'var(--color-bg)'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    level: "section",
    align: "center"
  }, "One more thing"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      margin: 'var(--space-3) auto var(--space-5)',
      fontWeight: 300,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Please reply by September 1 so we can give the caterers a number. If your plans change after that, write to us and we will sort it out."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setPage('rsvp')
  }, "RSVP")));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/RegistryScreen.jsx
try { (() => {
const {
  PageHeader,
  Card,
  SectionTitle,
  Button,
  Divider,
  PhotoFrame
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function RegistryScreen() {
  const d = window.OB_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "No obligation",
    title: "Registry",
    intro: "Your presence at four events across two countries is already a great deal to ask. If you would like to give something, these are the three places we have set up."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, d.registry.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 3",
    label: "Registry"
  }), /*#__PURE__*/React.createElement(SectionTitle, {
    level: "section"
  }, r.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, r.note), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Open registry")))), /*#__PURE__*/React.createElement(Divider, {
    label: "thank you"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      maxWidth: '52ch',
      margin: '0 auto',
      fontWeight: 300,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Gifts can also be sent to the Hawthorne address on your invitation card.")));
}
Object.assign(window, {
  RegistryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/RegistryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/RsvpScreen.jsx
try { (() => {
const {
  PageHeader,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Button,
  SectionTitle,
  DateLocation,
  Divider,
  Badge
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function RsvpScreen({
  setPage
}) {
  const d = window.OB_DATA;
  const [step, setStep] = React.useState('form');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [attending, setAttending] = React.useState('yes');
  const [events, setEvents] = React.useState({
    white: true
  });
  const [meal, setMeal] = React.useState('');
  const [note, setNote] = React.useState('');
  const [error, setError] = React.useState(null);
  const submit = e => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please tell us who is replying.');
      return;
    }
    setError(null);
    setStep('done');
  };
  if (step === 'done') {
    return /*#__PURE__*/React.createElement(Section, {
      style: {
        maxWidth: '640px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "stem"
    }, "Reply received"), /*#__PURE__*/React.createElement(SectionTitle, {
      level: "page",
      align: "center",
      style: {
        marginTop: 'var(--space-4)'
      }
    }, "Thank you, ", name.split(' ')[0]), /*#__PURE__*/React.createElement(DateLocation, {
      align: "center",
      style: {
        marginTop: 'var(--space-2)'
      }
    }, attending === 'yes' ? 'We will see you in November' : 'We will miss you'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 300,
        lineHeight: 'var(--leading-relaxed)',
        marginTop: 'var(--space-4)'
      }
    }, "A confirmation is on its way to ", email || 'your inbox', ". If anything changes, reply to that email and we will update your seat."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        justifyContent: 'center',
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setStep('form')
    }, "Edit reply"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setPage('travel')
    }, "Travel details")));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Kindly reply by September 1",
    title: "RSVP",
    intro: "One form per invitation. If you are bringing someone, add them at the bottom."
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      maxWidth: '820px'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "rsvp-name",
    required: true,
    hint: "As it appears on your invitation",
    error: error
  }, /*#__PURE__*/React.createElement(Input, {
    id: "rsvp-name",
    value: name,
    invalid: !!error,
    onChange: e => setName(e.target.value),
    placeholder: "Ogechi Nwosu"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "rsvp-email",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "rsvp-email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com"
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "subsection-title",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Will you be there?"), /*#__PURE__*/React.createElement(Radio, {
    name: "attending",
    id: "a-yes",
    label: "Joyfully accepts",
    checked: attending === 'yes',
    onChange: () => setAttending('yes')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "attending",
    id: "a-no",
    label: "Regretfully declines",
    checked: attending === 'no',
    onChange: () => setAttending('no')
  })), attending === 'yes' && /*#__PURE__*/React.createElement(Card, {
    tone: "plain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subsection-title",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Which events?"), d.events.map(e => /*#__PURE__*/React.createElement(Checkbox, {
    key: e.id,
    id: 'ev-' + e.id,
    label: e.title,
    description: e.date + ' · ' + e.location,
    checked: !!events[e.id],
    onChange: () => setEvents(s => ({
      ...s,
      [e.id]: !s[e.id]
    }))
  })), /*#__PURE__*/React.createElement(Divider, {
    variant: "hairline",
    space: "var(--space-3)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Meal choice",
    hint: "For the white wedding reception"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Choose one",
    value: meal,
    onChange: e => setMeal(e.target.value),
    options: ['Jollof rice', 'Beef suya', 'Vegetarian', 'Child\u2019s plate']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Guests in your party"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Just me', 'Two', 'Three', 'Four']
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "Anything we should know?",
    hint: "Allergies, a song, a late arrival"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    value: note,
    onChange: e => setNote(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send reply"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => setPage('home')
  }, "Back to the homepage")))));
}
Object.assign(window, {
  RsvpScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/RsvpScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  Footer,
  Button
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function Shell({
  page,
  setPage,
  children
}) {
  const d = window.OB_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: d.monogram,
    items: d.nav,
    active: page,
    onNavigate: setPage,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setPage('rsvp')
    }, "RSVP"),
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(Footer, {
    names: d.couple,
    date: d.mainDate,
    location: d.mainPlace,
    links: [...d.nav.map(n => n.label), 'RSVP'],
    onNavigate: label => setPage(label === 'RSVP' ? 'rsvp' : label.toLowerCase())
  }));
}
function Section({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)',
      ...style
    }
  }), children);
}
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/TravelScreen.jsx
try { (() => {
const {
  PageHeader,
  Card,
  DetailList,
  SectionTitle,
  PhotoFrame,
  Divider,
  Badge,
  Button
} = window.OgechiBrandonWeddingDesignSystem_218db6;
function TravelScreen({
  setPage
}) {
  const d = window.OB_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Getting here",
    title: "Travel & Stay",
    location: "Hawthorne, California",
    intro: "Everything below is for the California events. Details for Owerri will be sent by post to guests travelling to Nigeria."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    level: "section"
  }, "The practical things"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(DetailList, {
    items: d.travel
  }))), /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 5",
    label: "Venue",
    caption: "The chapel, Hawthorne"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionTitle, {
    level: "section"
  }, "Where to stay"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, [{
    n: 'The Ellsworth',
    p: '$210 / night',
    d: 'Room block, four minutes from the venue.',
    b: 'Block held'
  }, {
    n: 'Hotel Marchand',
    p: '$165 / night',
    d: 'Quieter, ten minutes north. Free parking.',
    b: null
  }, {
    n: 'Casa Vera',
    p: '$140 / night',
    d: 'Small and near the beach. Book early.',
    b: null
  }].map(h => /*#__PURE__*/React.createElement(Card, {
    key: h.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, h.b && /*#__PURE__*/React.createElement(Badge, {
    tone: "coral"
  }, h.b), /*#__PURE__*/React.createElement("div", {
    className: "subsection-title"
  }, h.n), /*#__PURE__*/React.createElement("div", {
    className: "date-location",
    style: {
      fontSize: '20px'
    }
  }, h.p), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, h.d)))), /*#__PURE__*/React.createElement(Divider, {
    variant: "hairline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      maxWidth: '48ch'
    }
  }, "If you need help with travel, tell us on your RSVP and we will call you."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setPage('rsvp')
  }, "Go to RSVP"))));
}
Object.assign(window, {
  TravelScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/TravelScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/data.js
try { (() => {
window.OB_DATA = {
  couple: 'Ogechi & Brandon',
  monogram: 'O & B',
  mainDate: 'November 27, 2026',
  mainPlace: 'Hawthorne, CA',
  nav: [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'travel',
    label: 'Travel'
  }, {
    id: 'registry',
    label: 'Registry'
  }],
  events: [{
    id: 'anglican',
    index: 'Event one',
    title: 'Anglican Ceremony',
    date: 'November 21, 2026',
    location: 'Owerri, Nigeria',
    time: 'Service 10:00am · Breakfast reception to follow',
    dress: 'Formal',
    access: 'Family and invited guests',
    description: 'A morning service at St. Paul\u2019s, followed by breakfast in the parish hall.'
  }, {
    id: 'traditional',
    index: 'Event two',
    title: 'Traditional Wedding',
    date: 'November 23, 2026',
    location: 'Owerri, Nigeria',
    time: 'Ceremony 2:00pm · Dinner 6:00pm',
    dress: 'Igbo traditional attire',
    access: 'All guests',
    description: 'The igba nkwu. Wear colour \u2014 the family will send fabric details closer to the date.'
  }, {
    id: 'white',
    index: 'Event three',
    title: 'The White Wedding',
    date: 'November 27, 2026',
    location: 'Hawthorne, CA',
    time: 'Ceremony 4:00pm · Reception 6:30pm',
    dress: 'Black tie',
    access: 'All guests',
    description: 'The ceremony begins at four. Doors open half an hour before, and seating is unassigned.'
  }, {
    id: 'brunch',
    index: 'Event four',
    title: 'Farewell Brunch',
    date: 'November 29, 2026',
    location: 'Manhattan Beach, CA',
    time: '11:00am until 2:00pm',
    dress: 'Come as you are',
    access: 'All guests',
    description: 'A slow last morning before everyone flies home. Drop in whenever you like.'
  }],
  travel: [{
    label: 'Nearest airport',
    value: 'LAX, twelve minutes from the venue by car.'
  }, {
    label: 'Hotel block',
    value: 'The Ellsworth, 4th & Grand. Rooms held under NWOSU-CARTER until October 1.'
  }, {
    label: 'Parking',
    value: 'Free lot on the north side of the chapel. Street parking is metered until 6:00pm.'
  }, {
    label: 'Getting around',
    value: 'Shuttles run between the hotel and the venue from 3:00pm.'
  }],
  registry: [{
    name: 'The honeymoon fund',
    note: 'Two weeks in Cape Town.'
  }, {
    name: 'Kitchen and table',
    note: 'Registered at Heath Ceramics.'
  }, {
    name: 'The house',
    note: 'Linens, lamps and the unglamorous things.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.DetailList = __ds_scope.DetailList;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.DateLocation = __ds_scope.DateLocation;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

})();
