import { Themes, useTheme } from '@expo/styleguide';
import { Contrast02SolidIcon } from '@expo/styleguide-icons/solid/Contrast02SolidIcon';
import { Moon01SolidIcon } from '@expo/styleguide-icons/solid/Moon01SolidIcon';
import { SunSolidIcon } from '@expo/styleguide-icons/solid/SunSolidIcon';

import { Select } from '~/ui/components/Select';

const options = [
  {
    id: Themes.AUTO,
    label: '自动',
    Icon: Contrast02SolidIcon,
  },
  {
    id: Themes.LIGHT,
    label: '浅色',
    Icon: SunSolidIcon,
  },
  {
    id: Themes.DARK,
    label: '深色',
    Icon: Moon01SolidIcon,
  },
];

export function ThemeSelector() {
  const { themeName, setAutoMode, setDarkMode, setLightMode } = useTheme();

  function onThemeSelect(value: string) {
    if (value === Themes.AUTO) {
      setAutoMode();
    }
    if (value === Themes.DARK) {
      setDarkMode();
    }
    if (value === Themes.LIGHT) {
      setLightMode();
    }
  }

  return (
    <Select
      className="min-w-[108px]"
      value={themeName ?? Themes.AUTO}
      onValueChange={onThemeSelect}
      options={options}
      optionsLabel="主题"
      ariaLabel="主题选择器"
    />
  );
}
