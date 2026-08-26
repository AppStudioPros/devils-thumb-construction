type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Safe JSON-LD renderer. Escapes </script> sequences to prevent XSS.
 * Use in Server Components — do not hydrate on client.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
