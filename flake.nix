{
  description = "poe2 diy item filter";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      archs = [ "x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin" ];
      sysPkg = s: import nixpkgs { system = s; };
      genSystems = fn: nixpkgs.lib.genAttrs archs (s: fn s (sysPkg s));
    in
    {
      devShells = genSystems (_: pkgs:
        {
          default = pkgs.mkShell {
            name = "poe2-item-filter";

            buildInputs = with pkgs; [
              nodejs_23
              corepack_latest
            ];
          };
        });

      formatter = genSystems (_: pkgs: pkgs.nixpkgs-fmt);
    };
}
