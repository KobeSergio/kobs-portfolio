import {
  buildHref,
  fileName,
  repoBasePath,
  repoHref,
  type Repo,
  type RepoDoc,
} from "@/lib/repos";
import FileTree from "./FileTree";
import FileContent from "./FileContent";
import AboutPanel from "./AboutPanel";

// GitHub's single-file view: tree on the left, the file in the middle and the
// About panel on the right. The columns wrap from three to one as the
// viewport narrows; About wraps above the file content.
export default function FileView({
  repos,
  repo,
  build,
}: {
  repos: Repo[];
  repo: Repo;
  build?: RepoDoc;
}) {
  const treeItems = repos.map((item) => ({
    slug: item.slug,
    files: [
      { label: "README.md", href: repoHref(item) },
      ...item.builds.map((doc) => ({
        label: fileName(doc),
        href: buildHref(item, doc),
      })),
    ],
  }));

  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-wrap items-start gap-6 p-[clamp(16px,3vw,24px)]">
      <FileTree
        label={repo.kind === "projects" ? "Projects" : "Experience"}
        backHref={repoBasePath[repo.kind]}
        items={treeItems}
        currentSlug={repo.slug}
        currentFile={fileName(build)}
      />
      <div className="flex min-w-0 flex-[999_1_640px] flex-wrap-reverse items-start gap-6">
        <FileContent repo={repo} build={build} />
        <div className="min-w-0 flex-[1_1_260px] self-stretch">
          <AboutPanel repo={repo} />
        </div>
      </div>
    </main>
  );
}
