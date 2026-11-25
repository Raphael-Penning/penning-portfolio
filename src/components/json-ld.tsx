import { jsonLdDocuments, serializeJsonLd, type JsonLdNode } from "@/lib/structured-data";

/** Renders every schema.org entity as its own <script type="application/ld+json">. */
export function JsonLd({ nodes }: { nodes: JsonLdNode[] }) {
  return jsonLdDocuments(nodes).map((doc, i) => (
    <script
      key={(doc["@id"] as string | undefined) ?? i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(doc) }}
    />
  ));
}
