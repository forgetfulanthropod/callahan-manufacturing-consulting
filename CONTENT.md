# How to fill this site in

All public copy lives in `src/content/`. Photography lives in `public/images/`. You should not need to touch layout files for a first pass.

## 1. Company facts

Edit [`src/content/site.ts`](src/content/site.ts)

- Legal name, tagline, lede
- Headquarters and offices
- Email and phone (the contact form mails here)
- Client list (placeholder OEM labels until NDAs allow names)
- Stats on the home page

## 2. The 100 problems

Edit [`src/content/problems.ts`](src/content/problems.ts)

- Keep `id` stable once the site is live (case studies point at those numbers)
- Change `title`, `summary`, `category`, `typicalOwner`
- Add or remove categories in `problemCategories`

## 3. Case studies

Edit [`src/content/caseStudies.ts`](src/content/caseStudies.ts)

- Set `disclosed: true` and put the real client name when you can
- Swap `image` to a file you drop in `public/images/`
- `problemsSolved` is a list of problem `id`s from the index

## 4. Capabilities

Edit [`src/content/services.ts`](src/content/services.ts)

- Titles, summaries, bullet work, and photos

## 5. Practice / principals

Edit [`src/content/team.ts`](src/content/team.ts)

- Replace the four placeholder principals
- Drop headshots in `public/images/` and we can wire portraits on a later pass

## 6. Photos

Current generated photography (no OEM marks):

| File | Used on |
| --- | --- |
| `public/images/hero-line.jpg` | Home hero |
| `public/images/battery-module.jpg` | Battery capability + a case study |
| `public/images/body-shop.jpg` | Body capability + a case study |
| `public/images/paint-shop.jpg` | Paint case study |
| `public/images/edrive.jpg` | E-drive capability + a case study |
| `public/images/quality-lab.jpg` | Quality capability + a case study |
| `public/images/war-room.jpg` | Cost / launch |
| `public/images/plant-walk.jpg` | About + localization |
| `public/images/eol-vehicle.jpg` | Launch capability |
| `public/images/hv-electrical.jpg` | HV electrical |

Replace any file with the same name to swap the photo site-wide.

## 7. Favicon and wordmark

- `public/favicon.svg` — the C mark
- Header wordmark is in `src/components/site-header.tsx`
