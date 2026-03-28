import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/section-header';
import { Section } from '@/components/shared/section';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conteúdos | Alex Zilotti - Psicólogo',
  description: 'Artigos, reflexões e conteúdos sobre psicologia, saúde mental e desenvolvimento pessoal por Alex Zilotti.',
};

export default async function ConteudosPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Section className="bg-slate-900 text-white">
        <SectionHeader
          title="Conteúdos"
          subtitle="Artigos e reflexões sobre psicologia, saúde mental e desenvolvimento pessoal"
          centered
          className="text-white [&>p]:text-slate-300"
        />
      </Section>

      <Section>
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">Novos conteúdos em breve. Fique atento!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/conteudos/${post.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    {post.category && (
                      <>
                        <span>•</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{post.category}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                  )}
                </div>
                <div className="px-6 pb-6">
                  <span className="text-blue-600 text-sm font-medium group-hover:underline">Ler mais →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
