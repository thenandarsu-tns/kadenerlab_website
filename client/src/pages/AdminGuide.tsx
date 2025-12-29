import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function AdminGuide() {
  return (
    <div>
      <PageHeader 
        title="Website Administration Guide" 
        description="How to update content, people, and publications."
      />

      <div className="container mx-auto px-4 pb-20 max-w-4xl">
        <Section className="py-0">
          <div className="prose prose-invert prose-lg max-w-none">
            <h3>Overview</h3>
            <p>
              This website is built with React and uses a centralized content file to manage text, people, publications, and news. 
              You do not need to edit complex code to update the site's content.
            </p>

            <h3>How to Edit Content</h3>
            <p>
              All editable content is located in the file: <code>client/src/data/content.ts</code>.
            </p>
            <p>
              To make changes, open this file in the Replit editor and modify the relevant sections. 
              The website will automatically update (you may need to refresh the preview).
            </p>

            <div className="bg-card/50 p-6 rounded-xl border border-white/10 my-8">
              <h4 className="mt-0">Quick Reference</h4>
              <ul className="list-none pl-0 space-y-4">
                <li>
                  <strong className="text-primary">Lab Info:</strong> Edit the <code>labInfo</code> object for name, tagline, mission, and contact details.
                </li>
                <li>
                  <strong className="text-primary">Research Themes:</strong> Update the <code>researchThemes</code> array. Ensure IDs remain unique.
                </li>
                <li>
                  <strong className="text-primary">People:</strong> Add or remove objects in the <code>people</code> array. Use valid categories: "PI", "Postdoc", "Grad Student", "Staff", "Alumni".
                </li>
                <li>
                  <strong className="text-primary">Publications:</strong> Add new papers to the <code>publications</code> array.
                </li>
                 <li>
                  <strong className="text-primary">News:</strong> Add new items to the <code>news</code> array.
                </li>
              </ul>
            </div>

            <h3>Images</h3>
            <p>
              To replace placeholder images:
            </p>
            <ol>
              <li>Upload your image files to the <code>client/src/assets</code> or <code>attached_assets</code> folder.</li>
              <li>In the code components (e.g., <code>People.tsx</code>, <code>Research.tsx</code>), import the new image at the top of the file.</li>
              <li>Replace the placeholder <code>src</code> attribute with your imported image variable.</li>
            </ol>
            
            <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20 text-amber-200 text-sm">
              <strong>Note:</strong> Since this is a static prototype on Replit, changes to <code>content.ts</code> require a re-deployment or server restart to fully propagate in production, though they should show up in the preview immediately.
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
