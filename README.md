# JOJE'S COLLECTION — publish on GitHub Pages

This is a simple shop with a public storefront and a product admin page. Product pictures are committed to this same GitHub repository; product details and KES prices are stored in `products.js`. Orders open WhatsApp at +254795796951.

## Publish
1. Create a GitHub repository named `jojes-collection` (or choose another name).
2. Upload the contents of this folder to the repository root — upload the files, not the ZIP itself.
3. Go to repository Settings → Pages → Build and deployment → Deploy from a branch.
4. Select branch `main`, folder `/ (root)`, then Save.
5. Your site will be `https://YOUR-USERNAME.github.io/jojes-collection/`.
6. Admin page: add `/admin.html` to that address.

## Create a restricted GitHub token
GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
- Resource owner: your account.
- Repository access: Only select repositories → your shop repository.
- Repository permissions: Contents → Read and write. Metadata read-only is automatic.
- Set an expiry and generate it. Copy it immediately.

Open the admin page, enter your GitHub username, repository name and token, then Connect. Add product name, category, price in KES, description, stock and pictures. Pictures are uploaded to `images/`; product catalogue is updated in `products.js`. GitHub Pages may take a few minutes to publish updates.

## Security and limitations
This is a convenience setup for a single shop owner, not a high-security multi-user CMS. The token is entered into the admin page and held in page memory only (not stored or committed), but it is still used by browser JavaScript and should only be entered on a trusted device. Anyone who obtains the token can write to the selected repository. Use a fine-grained token restricted to this one repository, Contents read/write only, with an expiry. Never share it or put it in source code. For stronger security, put the token behind a server-side function (such as a Cloudflare Worker).

GitHub Pages publishes public files, so uploaded product images and product details are public. Keep images compressed and under 8 MB each. Repository size and bandwidth are subject to GitHub limits. The admin page does not delete old image files when a product is edited or deleted. Multiple images can be uploaded in one submission; the first selected image is used as the product's main displayed image. Additional images are uploaded but are not currently shown as a gallery.

No Firebase, Supabase, Cloudinary, payment gateway or online checkout is used.
