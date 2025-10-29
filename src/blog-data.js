import {blog_compilers} from './compilers'
import {blog_crm} from './crm'
import { blog_ml } from './machinelearning';

export const posts = [
  {
    id: 'comm-alg', // This will be the URL slug
    title: 'Documentation for Algorithms in Commutative Algebra',
    date: 'December 3, 2024',
    snippet: 'This is a link to the documentation developped for the different pruning algorithms done for ...',
    externalUrl: 'https://malupar.github.io/MorseResolutions/'
  },
  blog_crm,
  blog_ml,
  blog_compilers,
];