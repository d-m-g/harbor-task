import { comparison } from "../data/landingContent";
import { MaterialIcon } from "./ui/MaterialIcon";

export function ComparisonSection() {
  return (
    <section id="comparison" className="bg-on-surface px-8 py-24 text-surface">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-headline text-4xl font-black lg:text-5xl">
            {comparison.title}
          </h2>
          <p className="text-lg text-tertiary-fixed">{comparison.subtitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-surface/10">
                <th className="py-6 text-xl font-bold">Features</th>
                <th className="py-6 text-2xl font-black text-primary-container">
                  Beely Subscription
                </th>
                <th className="py-6 font-medium text-surface-container-highest opacity-60">
                  Traditional Leasing
                </th>
                <th className="py-6 font-medium text-surface-container-highest opacity-60">
                  Ownership
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface/10">
              {comparison.rows.map((row) => (
                <tr key={row.feature}>
                  <td className="py-6">{row.feature}</td>
                  <td className="py-6 text-primary-container">
                    {"beelyKind" in row && row.beelyKind === "check" ? (
                      <MaterialIcon name="check_circle" className="text-primary-container" />
                    ) : (
                      <span className="font-bold">
                        {"beely" in row ? row.beely : ""}
                      </span>
                    )}
                  </td>
                  <td className="py-6 opacity-60">{row.leasing}</td>
                  <td className="py-6 opacity-60">{row.ownership}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
