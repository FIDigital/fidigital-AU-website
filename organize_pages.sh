#!/bin/bash

# Define directories to create
DIRS=(
  "src/app/product-engineering"
  "src/app/product-engineering/web-applications"
  "src/app/product-engineering/mobile-applications"
  "src/app/product-engineering/saas-mvp"
  "src/app/product-engineering/product-modernisation"
  "src/app/data-platforms"
  "src/app/data-platforms/databricks"
  "src/app/data-platforms/microsoft-fabric"
  "src/app/data-platforms/snowflake"
  "src/app/data-platforms/business-intelligence"
  "src/app/ai-agents"
  "src/app/ai-agents/rag-document-intelligence"
  "src/app/ai-agents/copilots-digital-workers"
  "src/app/ai-agents/workflow-automation"
  "src/app/business-systems"
  "src/app/industries/financial-services-wealth"
  "src/app/industries/healthcare-aged-care"
  "src/app/industries/resources-mining-logistics"
  "src/app/why-fi-digital"
  "src/app/why-fi-digital/global-delivery"
  "src/app/why-fi-digital/partnerships"
  "src/app/why-fi-digital/australian-compliance"
  "src/app/case-studies"
  "src/app/contact"
  "src/app/book-discovery"
)

for dir in "${DIRS[@]}"; do
  mkdir -p "$dir"
  
  # Only create page.jsx if it doesn't already exist
  if [ ! -f "$dir/page.jsx" ]; then
    # Generate an elegant title by taking the last part of the path, replacing hyphens with spaces, and capitalizing words
    title=$(basename "$dir" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')
    
    cat << PAGE > "$dir/page.jsx"
export default function Page() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-neutral-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        ${title}
      </h1>
      <p className="text-lg text-neutral-400 max-w-2xl text-center">
        This is a placeholder for the ${title} page, part of the new digital transformation architecture.
      </p>
    </div>
  );
}
PAGE
  fi
done

# Now remove the old directories that are no longer part of the page index
OLD_DIRS=(
  "src/app/about"
  "src/app/ai"
  "src/app/casestudy"
  "src/app/digital-workers"
  "src/app/marketing-automation"
  "src/app/methodology"
  "src/app/platform"
  "src/app/product-studio"
  "src/app/resources"
  "src/app/sales"
  "src/app/service"
  "src/app/solutions"
  "src/app/industries/healthcare"
  "src/app/industries/real-estate"
  "src/app/industries/retail-ecommerce"
  "src/app/industries/professional-services"
  "src/app/industries/fnb-hospitality"
  "src/app/industries/logistics"
)

for old_dir in "${OLD_DIRS[@]}"; do
  if [ -d "$old_dir" ]; then
    rm -rf "$old_dir"
    echo "Removed $old_dir"
  fi
done

echo "Page reorganization complete."
